/** @jsxImportSource @emotion/react */
import BoardUpdateComponent from "../../../components/BoardPage/BoardUpdateComponent/BoardUpdateComponent";
import * as s from "./style";

function TogetherUpdatePage({ boardCategoryId }) {
    return (
        <BoardUpdateComponent
            updateTitle={"동행 게시글 수정"}
            boardCategoryId={boardCategoryId}
            detailUrl={"together"}
        />
    );
}

export default TogetherUpdatePage;
