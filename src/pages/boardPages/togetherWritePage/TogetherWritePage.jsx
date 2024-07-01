/** @jsxImportSource @emotion/react */
import BoardWritePageComponent from "../../../components/BoardPage/BoardWritePageComponent/BoardWritePageComponent";
import * as s from "./style";

function TogetherWritePage(props) {
    return (
        <BoardWritePageComponent
            writeTitle={"동행 게시글 작성"}
            boardCategoryId={3}
        />
    );
}

export default TogetherWritePage;
