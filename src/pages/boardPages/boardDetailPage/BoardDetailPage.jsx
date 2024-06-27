/** @jsxImportSource @emotion/react */
import * as s from "./style";

import BoardDetailComponent from "../../../components/BoardPage/BoardDetailComponent/BoardDetailComponent";
import BoardCommentComponent from "../../../components/BoardPage/BoardCommentComponent/BoardCommentComponent";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getBoardByBoardId } from "../../../apis/board/boardApi";

function BoardDetailPage() {
    const params = useParams();
    const [boardData, setBoardData] = useState();

    const getBoardByBoardIdQuery = useQuery(
        ["getBoardByBoardIdQuery", params.boardId],
        () => getBoardByBoardId(params.boardId),
        {
            onSuccess: (response) => {
                setBoardData(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>맛집</h1>
                    <div css={s.profileBox}>
                        <img src={boardData?.profileImg} alt="" />
                        {boardData?.nickname}
                    </div>
                </div>
                <div css={s.contentBox}>
                    <div>
                        <BoardDetailComponent
                            boardTitle={boardData?.boardTitle}
                            boardContent={boardData?.boardContent}
                            countryNameKor={boardData?.countryNameKor}
                            updateDate={boardData?.updateDate}
                        />
                    </div>
                    <div>
                        <BoardCommentComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;
