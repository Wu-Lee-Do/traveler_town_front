/** @jsxImportSource @emotion/react */
import * as s from "./style";

import BoardDetailComponent from "../../../components/BoardPage/BoardDetailComponent/BoardDetailComponent";
import BoardCommentComponent from "../../../components/BoardPage/BoardCommentComponent/BoardCommentComponent";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    addBoardBookmark,
    addBoardLike,
    getBoardBookmark,
    getBoardByBoardId,
    getBoardLike,
    removeBoardBookmark,
    removeBoardLike,
} from "../../../apis/board/boardApi";
import { FaHeart, FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function BoardDetailPage({ title }) {
    const params = useParams();
    const boardId = parseInt(params.boardId);
    const [boardData, setBoardData] = useState();
    const [userBoardBookmarkState, setUserBoardBookmarkState] = useState();
    const [userBoardLikeData, setUserBoardLikeData] = useState();
    const [userBoardLikeState, setUserBoardLikeState] = useState();
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
                console.log(response.data);
                setUserBoardBookmarkState(response.data[0]);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const getBoardLikeQuery = useQuery(
        ["getBoardLikeQuery", boardId],
        () => getBoardLike(boardId),
        {
            onSuccess: (response) => {
                if (
                    !!response.data.filter(
                        (like) => like.userId === principalData.data.userId
                    )[0]
                ) {
                    setUserBoardLikeState(() => true);
                    setUserBoardLikeData(() => response.data);
                } else {
                    setUserBoardLikeState(() => false);
                }
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const addBoardLikeMutation = useMutation({
        mutationKey: "addBoardLikeMutation",
        mutationFn: addBoardLike,
        onSuccess: (response) => {
            getBoardLikeQuery.refetch();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const removeBoardLikeMutation = useMutation({
        mutationKey: "removeBoardLikeMutation",
        mutationFn: removeBoardLike,
        onSuccess: (response) => {
            getBoardLikeQuery.refetch();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleLikeOnClick = () => {
        if (userBoardLikeState === false) {
            addBoardLikeMutation.mutate({
                boardId: boardData.boardId,
                userId: principalData.data.userId,
            });
        } else {
            removeBoardLikeMutation.mutate(
                userBoardLikeData?.filter(
                    (like) => like.userId === principalData?.data.userId
                )[0].boardLikeId
            );
        }
    };

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
                        <button onClick={handleLikeOnClick}>
                            {userBoardLikeState ? <FaHeart /> : <FaRegHeart />}
                            <span>{userBoardLikeData?.length}</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div css={s.titleBox}>
                        <h1>{title}</h1>
                        <div css={s.profileBox}>
                            <img src={boardData?.profileImg} alt="" />
                            {boardData?.nickname}
                        </div>
                    </div>
                    <div css={s.contentBox}>
                        <div>
                            <BoardDetailComponent
                                boardId={boardData?.boardId}
                                userId={boardData?.userId}
                                boardTitle={boardData?.boardTitle}
                                boardContent={boardData?.boardContent}
                                countryNameKor={boardData?.countryNameKor}
                                updateDate={boardData?.updateDate}
                            />
                        </div>
                        <div css={s.commentLayout}>
                            <BoardCommentComponent
                                boardId={boardData?.boardId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;
