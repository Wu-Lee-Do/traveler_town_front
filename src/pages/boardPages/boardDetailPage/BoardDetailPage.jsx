/** @jsxImportSource @emotion/react */
import * as s from "./style";

import BoardDetailComponent from "../../../components/BoardPage/BoardDetailComponent/BoardDetailComponent";
import BoardCommentComponent from "../../../components/BoardPage/BoardCommentComponent/BoardCommentComponent";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    addBoardBookmark,
    addBoardLike,
    getBoardBookmark,
    getBoardBookmarkAll,
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
    const [userBoardBookmarkData, setUserBoardBookmarkData] = useState();
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

    const getBoardBookmarkAllQuery = useQuery(
        ["getBoardBookmarkAllQuery", boardId],
        () => getBoardBookmarkAll(boardId),
        {
            onSuccess: (response) => {
                setUserBoardBookmarkData(response.data);
                if (
                    !!response.data.filter(
                        (bookmark) =>
                            bookmark.userId === principalData.data.userId
                    )[0]
                ) {
                    setUserBoardBookmarkState(() => true);
                } else {
                    setUserBoardBookmarkState(() => false);
                }
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
            getBoardBookmarkAllQuery.refetch();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const removeBoardBookmarkMutation = useMutation({
        mutationKey: "removeBoardBookmarkMutation",
        mutationFn: removeBoardBookmark,
        onSuccess: (response) => {
            getBoardBookmarkAllQuery.refetch();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const getBoardLikeQuery = useQuery(
        ["getBoardLikeQuery", boardId],
        () => getBoardLike(boardId),
        {
            onSuccess: (response) => {
                setUserBoardLikeData(response.data);
                if (
                    !!response.data.filter(
                        (like) => like.userId === principalData.data.userId
                    )[0]
                ) {
                    setUserBoardLikeState(() => true);
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
                userBoardBookmarkData?.filter(
                    (bookmark) => bookmark.userId === principalData?.data.userId
                )[0].boardBookMarkId
            );
        } else {
            addBoardBookmarkMutation.mutate({
                userId: principalData.data.userId,
                boardId: boardId,
            });
        }
    };

    useEffect(() => {
        getBoardLikeQuery.refetch();
        getBoardBookmarkAllQuery.refetch();
    }, [userBoardBookmarkState, userBoardLikeState]);

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
                            <span>{userBoardBookmarkData?.length}</span>
                        </button>
                        <button onClick={handleLikeOnClick}>
                            {!!userBoardLikeState ? (
                                <FaHeart />
                            ) : (
                                <FaRegHeart />
                            )}
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
