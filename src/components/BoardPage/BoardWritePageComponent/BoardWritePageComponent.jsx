/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { addMustGoRestaurant } from "../../../apis/board/mustGoRestaurantApi";
import BoardWriteComponent from "../BoardWriteComponent/BoardWriteComponent";

function BoardWritePageComponent({writeTitle, boardCategoryId}) {

  const [countryCode, setCountryCode] = useState({});
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const quillRef = useRef();
  const principalQueryState = useQueryClient().getQueryState("principalQuery");
  const navigator = useNavigate();

  const quillOnChange = (value) => {
    setBoardContent(value);
  }

  const uploadBase64Image = async (base64Image) => {
    try {
      const uuid4 = uuid();
      const storageRef = ref(storage, `images/board/${uuid4}/${Date.now()}`);
      await uploadString(storageRef, base64Image, 'data_url');
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  }

  const quillFileOnChange = async (boardContent) => {
    const base64Regex = /data:image\/[^;]+;base64,[^"']+/g;
    let base64MatchArray = Array.from(boardContent.matchAll(base64Regex));
    if (base64MatchArray) {
      try {
        const uploadPromises = base64MatchArray.map(async (match) => {
          const base64Image = match[0];
          const downloadUrl = await uploadBase64Image(base64Image);
          return { base64Image, downloadUrl };
        });

        const results = await Promise.all(uploadPromises);

        results.forEach(({ base64Image, downloadUrl }) => {
          boardContent = boardContent.replace(base64Image, downloadUrl);
        });
        
      } catch (error) {
        console.log(error);
      }
    }
    return boardContent;
  }

  const addMustGoRestaurantMutation = useMutation({
    mutationKey: "addMustGoRestaurantMutation",
    mutationFn: addMustGoRestaurant,
    onSuccess: (response) => {
      alert("게시물 작성 성공");
      navigator("/board/mustgorestaurant");
    }, 
    onError: (error) => {
      alert("게시물 작성 실패");
    }
  });

  const submitButtonClick = async () => {
    if(window.confirm("게시물을 작성하시겠습니까?")) {
      const newBoardContent =  await quillFileOnChange(boardContent);
      addMustGoRestaurantMutation.mutate({
        boardCategoryId : boardCategoryId,
        countryCode : countryCode.countryCode,
        boardTitle,
        boardContent: newBoardContent,
        userId : principalQueryState.data?.data.userId
      });
      console.log(newBoardContent);
      console.log(boardContent)
    }
  }

  return (
    <div css={s.layout}>
      <div css={s.box}>
        <div css={s.titleBox}>
          <h1>{writeTitle}</h1>
        </div>
        <div css={s.contentBox}>
          <div>
            <BoardWriteComponent 
              setboardTitle={setBoardTitle} 
              setCountryCode={setCountryCode} 
              quillValue={boardContent} 
              quillOnChange={quillOnChange}
              fileRef={quillRef}
              onClick={submitButtonClick}
            />
          </div>
          <div>
            아이디어 구상중...
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardWritePageComponent;