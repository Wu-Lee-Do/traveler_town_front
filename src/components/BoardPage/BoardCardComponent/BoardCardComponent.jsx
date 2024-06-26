/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/usa.webp"
import defaultprofileImg from "../../../assets/defaultImg.webp"
import { BiSolidComment } from "react-icons/bi";
import { FaHeart, FaBookmark } from "react-icons/fa";

function BoardCardComponent({boardTitle, boardContent, createDate, updateDate, profileImg, nickname, countryNameKor}) {
  const imgTagRegex = /<img[^>]+src="([^">]+)"/i;
  const match = boardContent.match(imgTagRegex);

  const removeHtmlTags = (boardContent) => {
    return boardContent.replace(/<[^>]*>/g, '');
  }

  const dateString = (createDate) => {
    const date = new Date(createDate);
    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  return (
    // 업로드 시간 배치 작업 필요
    <div css={s.boardCard}>
      <div css={s.category}>{countryNameKor}</div>
      <div css={s.imgBox}>
          <img src={match ? match[1] : defaultImg} alt="" />
      </div>
      
      <div css={s.boardInfo}>
          <div css={s.boardText}>
              <h3>{boardTitle}</h3>
              <div>
                  {removeHtmlTags(boardContent)}
              </div>
              <div>{dateString(createDate)}</div>
          </div>
          <div css={s.profileBox}>
              <div>
                <img src={profileImg} alt="" />
                <div css={s.nickname}>{nickname}</div>
              </div>
              <div>
                <BiSolidComment/>
                <span>?</span>
                <FaHeart/>
                <span>?</span>
                <FaBookmark/>
                <span>?</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default BoardCardComponent;
