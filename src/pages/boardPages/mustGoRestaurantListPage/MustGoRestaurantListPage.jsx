import BoardListPageComponent from "../../../components/BoardPage/BoardListPageComponent/BoardListPageComponent";

function MustGoRestaurantListPage({ boardCategoryId }) {
    return (
        <BoardListPageComponent
            listTitle={"맛집"}
            boardCategoryId={boardCategoryId}
        />
    );
}

export default MustGoRestaurantListPage;
