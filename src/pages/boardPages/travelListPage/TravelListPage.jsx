import BoardListPageComponent from "../../../components/BoardPage/BoardListPageComponent/BoardListPageComponent";

function TravelListPage({ boardCategoryId }) {
    return (
        <BoardListPageComponent
            listTitle={"여행지"}
            boardCategoryId={boardCategoryId}
            writeUrl={"travel"}
            detailUrl={"travel"}
        />
    );
}

export default TravelListPage;
