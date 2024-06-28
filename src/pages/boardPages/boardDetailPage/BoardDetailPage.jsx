/** @jsxImportSource @emotion/react */
import * as s from "./style";

import BoardDetailComponent from "../../../components/BoardPage/BoardDetailComponent/BoardDetailComponent";
import BoardCommentComponent from "../../../components/BoardPage/BoardCommentComponent/BoardCommentComponent";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    addBoardBookmark,
    getBoardBookmark,
    getBoardByBoardId,
    removeBoardBookmark,
} from "../../../apis/board/boardApi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function BoardDetailPage() {
    const params = useParams();
    const boardId = parseInt(params.boardId);
    const [boardData, setBoardData] = useState();
    const [userBoardBookmarkState, setUserBoardBookmarkState] = useState();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const getBoardByBoardIdQuery = useQuery(
        ["getBoardByBoardIdQuery", boardId],
        () => getBoardByBoardId(boardId),
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
            getBoardBookmarkQuery.refetch();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const removeBoardBookmarkMutation = useMutation({
        mutationKey: "removeBoardBookmarkMutation",
        mutationFn: removeBoardBookmark,
        onSuccess: (response) => {
            console.log(response.data);
            getBoardBookmarkQuery.refetch();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const getBoardBookmarkQuery = useQuery(
        [
            "getBoardBookmarkQuery",
            {
                userId: principalData.data.userId,
                boardId: boardId,
            },
        ],
        () =>
            getBoardBookmark({
                userId: principalData.data.userId,
                boardId: boardId,
            }),
        {
            onSuccess: (response) => {
                setUserBoardBookmarkState(response.data[0]);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    console.log(userBoardBookmarkState);
    const handleBookmarkOnClick = () => {
        if (!!userBoardBookmarkState) {
            removeBoardBookmarkMutation.mutate(
                userBoardBookmarkState?.boardBookmarkId
            );
        } else {
            addBoardBookmarkMutation.mutate({
                userId: principalData.data.userId,
                boardId: boardId,
            });
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.stickyLayout}>
                    <div css={s.stickyBox}>
                        <button onClick={handleBookmarkOnClick}>
                            {!!userBoardBookmarkState ? (
                                <FaBookmark />
                            ) : (
                                <FaRegBookmark />
                            )}
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
