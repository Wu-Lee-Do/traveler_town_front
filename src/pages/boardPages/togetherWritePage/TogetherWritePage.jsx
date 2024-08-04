import BoardWritePageComponent from "../../../components/BoardPage/BoardWritePageComponent/BoardWritePageComponent";
import { useAuthCheck } from "../../../hooks/useAuthCheck";

function TogetherWritePage(props) {
    useAuthCheck();

    return (
        <BoardWritePageComponent
            writeTitle={"동행 게시글 작성"}
            boardCategoryId={3}
        />
    );
}

export default TogetherWritePage;
