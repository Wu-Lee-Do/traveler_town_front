/** @jsxImportSource @emotion/react */
import BoardUpdateComponent from "../../../components/BoardPage/BoardUpdateComponent/BoardUpdateComponent";

function MustGoRestaurantUpdatePage({ boardCategoryId }) {
    return (
        <BoardUpdateComponent
            updateTitle={"맛집 게시글 수정"}
            boardCategoryId={boardCategoryId}
        />
    );
}

export default MustGoRestaurantUpdatePage;
