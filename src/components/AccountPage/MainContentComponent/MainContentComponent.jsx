/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ContentComponent from "../ContentComponent/ContentComponent";
import { useRecoilState } from "recoil";
import { selectedProfileContentCategoryState } from "../../../atoms/selectedProfileContentCategoryAtom";

function MainContentComponent({ boardData, profileData }) {
    const [categoryState, setCategoryState] = useRecoilState(
        selectedProfileContentCategoryState
    );

    const handleCategoryClick = (category) => {
        setCategoryState(category);
    };

    return (
        <>
            <div css={s.mainHeader(categoryState)}>
                <div onClick={() => handleCategoryClick(1)}>게시물</div>
                <div onClick={() => handleCategoryClick(2)}>좋아요</div>
            </div>
            <div css={s.contentLayout}>
                {boardData.length === 0 ? (
                    <h3>아직 게시물이 없어요...</h3>
                ) : (
                    boardData?.map((board, index) => (
                        <ContentComponent
                            boardBookmarkCount={board.boardBookmarkCount}
                            boardCommentCount={board.boardCommentCount}
                            boardContent={board.boardContent}
                            boardLikeCount={board.boardLikeCount}
                            boardTitle={board.boardTitle}
                            nickname={board.nickname}
                            profileImg={board.profileImg}
                            updateDate={board.updateDate}
                            boardCategoryId={board.boardCategoryId}
                            boardId={board.boardId}
                            key={index}
                            userId={board.userId}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default MainContentComponent;
