/** @jsxImportSource @emotion/react */
import * as s from "./style";

import BoardDetailComponent from "../../../components/BoardPage/BoardDetailComponent/BoardDetailComponent";
import defaultImg from "../../../assets/defaultImg.webp";

function BoardDetailPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>맛집</h1>
                    <div css={s.profileBox}>
                        <img src={defaultImg} alt="" />
                        동윤잉
                    </div>
                </div>
                <div css={s.contentBox}>
                    <div>
                        <BoardDetailComponent />
                    </div>
                    <div>댓글 컴포넌트</div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;
