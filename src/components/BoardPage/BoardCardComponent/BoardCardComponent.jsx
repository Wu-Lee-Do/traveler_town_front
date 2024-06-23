/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/usa.webp"
import defaultprofileImg from "../../../assets/defaultImg.webp"

function BoardCardComponent({boardTitle, boardContent, createDate, updateDate, profileImg, nickname, countryNameKor}) {
  return (
    // 업로드 시간 배치 작업 필요
    <div css={s.boardCard}>
      <div css={s.imgBox}>
          <img src={defaultImg} alt="" />
      </div>
      <div css={s.boardInfo}>
          <div css={s.boardText}>
              <h3>{boardTitle}</h3>
              <div>
                  {boardContent}
              </div>
          </div>
          <div css={s.profileBox}>
              <div>
                <img src={profileImg} alt="" />
                <div css={s.nickname}>{nickname}</div>
              </div>
              <div css={s.category}>{countryNameKor}</div>
          </div>
      </div>
    </div>
  )
}

export default BoardCardComponent;
