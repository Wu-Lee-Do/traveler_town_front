/** @jsxImportSource @emotion/react */
import BoardListPageComponent from "../../../components/BoardPage/BoardListPageComponent/BoardListPageComponent";
import * as s from "./style";

function TogetherListPage({ boardCategoryId }) {
    return (
        <BoardListPageComponent
            listTitle={"동행"}
            boardCategoryId={boardCategoryId}
            writeUrl={"together"}
            detailUrl={"together"}
        />
    );
}

export default TogetherListPage;
