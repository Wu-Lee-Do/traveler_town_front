/** @jsxImportSource @emotion/react */
import BoardWritePageComponent from "../../../components/BoardPage/BoardWritePageComponent/BoardWritePageComponent";
import { useAuthCheck } from "../../../hooks/useAuthCheck";

function MustGoRestaurantWritePage(props) {
    useAuthCheck();
    return (
        <BoardWritePageComponent
            writeTitle={"맛집 게시글 작성"}
            boardCategoryId={1}
        />
    );
}

export default MustGoRestaurantWritePage;
