/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/usa.webp"
import defaultprofileImg from "../../../assets/defaultImg.webp"

function BoardCardComponent({boardTitle, boardContent, createDate, updateDate, profileImg, nickname, countryNameKor}) {
  const imgTagRegex = /<img[^>]+src="([^">]+)"/i;
  const match = boardContent.match(imgTagRegex);

  const removeHtmlTags = (boardContent) => {
    return boardContent.replace(/<[^>]*>/g, '');
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
          </div>
          <div css={s.profileBox}>
              <div>
                <img src={profileImg} alt="" />
                <div css={s.nickname}>{nickname}</div>
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default BoardCardComponent;
