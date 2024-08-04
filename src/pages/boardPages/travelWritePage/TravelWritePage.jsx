/** @jsxImportSource @emotion/react */

import BoardWritePageComponent from "../../../components/BoardPage/BoardWritePageComponent/BoardWritePageComponent";
import { useAuthCheck } from "../../../hooks/useAuthCheck";

function TravelWritePage(porps) {
    useAuthCheck();
    return (
        <BoardWritePageComponent
            writeTitle={"여행지 게시글 작성"}
            boardCategoryId={2}
        />
    );
}

export default TravelWritePage;
