/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { getBoardByBoardId, updateBoard } from "../../../apis/board/boardApi";
import BoardWriteComponent from "../BoardWriteComponent/BoardWriteComponent";

function BoardUpdateComponent({ updateTitle, boardCategoryId, detailUrl }) {
    const [countryCode, setCountryCode] = useState({});
    const [boardTitle, setBoardTitle] = useState("");
    const [boardContent, setBoardContent] = useState("");
    const quillRef = useRef();
    const principalQueryState =
        useQueryClient().getQueryState("principalQuery");
    const navigator = useNavigate();
    const params = useParams();

    const getBoardByBoardIdQuery = useQuery(
        ["getBoardByBoardIdQuery", params.boardId],
        () => getBoardByBoardId(params.boardId),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                const data = response.data;
                setBoardTitle(data.boardTitle);
                setBoardContent(data.boardContent);
                setCountryCode({
                    countryCode: data.countryCode,
                    countryNameKor: data.countryNameKor,
                });
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    useEffect(() => {
        console.log(countryCode);
    }, [countryCode]);

    const quillOnChange = (value) => {
        setBoardContent(value);
    };

    const uploadBase64Image = async (base64Image) => {
        try {
            const uuid4 = uuid();
            const storageRef = ref(
                storage,
                `images/board/${uuid4}/${Date.now()}`
            );
            await uploadString(storageRef, base64Image, "data_url");
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.log(error);
        }
    };

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
                    boardContent = boardContent.replace(
                        base64Image,
                        downloadUrl
                    );
                });
            } catch (error) {
                console.log(error);
            }
        }
        return boardContent;
    };

    const updateBoardMutation = useMutation({
        mutationKey: "updateBoardMutation",
        mutationFn: updateBoard,
        onSuccess: (response) => {
            alert("게시물 수정 성공");
            navigator(`/board/${detailUrl}/${params.boardId}`);
        },
        onError: (error) => {
            alert("게시물 수정 실패");
        },
    });

    const submitButtonClick = async () => {
        if (window.confirm("게시물을 수정하시겠습니까?")) {
            const updateBoardContent = await quillFileOnChange(boardContent);
            updateBoardMutation.mutate({
                boardId: params.boardId,
                boardCategoryId: boardCategoryId,
                countryCode: countryCode.countryCode,
                boardTitle,
                boardContent: updateBoardContent,
                userId: principalQueryState.data?.data.userId,
            });
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>{updateTitle}</h1>
                </div>
                <div css={s.contentBox}>
                    <div>
                        <BoardWriteComponent
                            boardTitle={boardTitle}
                            setboardTitle={setBoardTitle}
                            countryCode={countryCode}
                            setCountryCode={setCountryCode}
                            quillValue={boardContent}
                            quillOnChange={quillOnChange}
                            fileRef={quillRef}
                            buttonTitle={"수정하기"}
                            onClick={submitButtonClick}
                        />
                    </div>
                    <div>아이디어 구상중...</div>
                </div>
            </div>
        </div>
    );
}

export default BoardUpdateComponent;
