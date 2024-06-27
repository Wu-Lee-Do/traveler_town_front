/** @jsxImportSource @emotion/react */
import * as s from "./style";

import BoardDetailComponent from "../../../components/BoardPage/BoardDetailComponent/BoardDetailComponent";
import BoardCommentComponent from "../../../components/BoardPage/BoardCommentComponent/BoardCommentComponent";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    addBoardBookmark,
    getBoardByBoardId,
} from "../../../apis/board/boardApi";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

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

    const addBoardBookmarkMutation = useMutation({
        mutationKey: "addBoardBookmarkMutation",
        mutationFn: addBoardBookmark,
        onSuccess: (response) => {
            console.log(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleBookmarkOnClick = () => {
        addBoardBookmarkMutation.mutate({ boardId: parseInt(params.boardId) });
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.stickyLayout}>
                    <div css={s.stickyBox}>
                        <button onClick={handleBookmarkOnClick}>
                            <FaRegBookmark />
                            <span>24</span>
                        </button>
                        <button>
                            <FaRegHeart />
                            <span>18</span>
                        </button>
                    </div>
                </div>
                <div>
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
        </div>
    );
}

export default BoardDetailPage;
