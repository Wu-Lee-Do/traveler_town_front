/** @jsxImportSource @emotion/react */

import BoardUpdateComponent from "../../../components/BoardPage/BoardUpdateComponent/BoardUpdateComponent";

function TravelUpdatePage({ boardCategoryId }) {
    return (
        <BoardUpdateComponent
            updateTitle={"여행지 게시글 수정"}
            boardCategoryId={boardCategoryId}
            detailUrl={"travel"}
        />
    );
}

export default TravelUpdatePage;
