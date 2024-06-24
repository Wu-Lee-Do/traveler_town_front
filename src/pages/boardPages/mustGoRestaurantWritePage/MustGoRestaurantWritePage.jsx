/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MustGoRestaurantWritePage() {
  return (
    <div css={s.layout}>
      <div css={s.box}>
        <div css={s.titleBox}>
          <h1>맛집 게시글 작성</h1>
        </div>
        <div css={s.contentBox}>
          <div>
            글쓰기 영역
          </div>
          <div>
            주전부리
          </div>
        </div>
      </div>
    </div>
  )
}

export default MustGoRestaurantWritePage;