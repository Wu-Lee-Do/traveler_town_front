/** @jsxImportSource @emotion/react */
import * as s from "./style";

import defaultImg from "../../../assets/defaultImg.webp";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
    addNewComment,
    getCommentsAll,
} from "../../../apis/comment/commentApi";

function BoardCommentComponent({ boardId }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [commentInputValue, setCommentInputValue] = useState("");
    const [commentData, setCommentData] = useState([]);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const scrollRef = useRef(null);
    const updateScroll = () => {
        if (scrollRef.current) {
            setScrollPosition(scrollRef.current.scrollTop);
        }
    };

    const getCommentAllQuery = useQuery(
        ["getCommentAllQuery", boardId],
        () => getCommentsAll({ boardId: boardId }),
        {
            enabled: !!boardId,
            onSuccess: (response) => {
                console.log(response.data);
                setCommentData(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const newCommentMutation = useMutation({
        mutationKey: "newCommentMutation",
        mutationFn: addNewComment,
        onSuccess: (response) => {
            if (response.data === 1) {
                getCommentAllQuery.refetch();
                setCommentInputValue(() => "");
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    useEffect(() => {
        const currentScrollRef = scrollRef.current;
        if (currentScrollRef) {
            currentScrollRef.addEventListener("scroll", updateScroll);
        }
        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener("scroll", updateScroll);
            }
        };
    }, []);

    const handleCommentInputOnChange = (e) => {
        console.log(e.target.value);
        setCommentInputValue(() => e.target.value);
    };

    const handleCommentSubmitClick = () => {
        if (commentInputValue.length === 0) {
            return;
        } else {
            newCommentMutation.mutate({
                boardId: boardId,
                userId: principalData?.data.userId,
                boardComment: commentInputValue,
            });
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.titled(scrollPosition)}>
                <h1>댓글({commentData.length})</h1>
            </div>
            <div ref={scrollRef} css={s.boxLayout}>
                {commentData?.map((comment, index) => (
                    <div css={s.box} key={index}>
                        <div css={s.info}>
                            <div>
                                <img src={comment?.profileImg} alt="" />
                                <div>{comment?.nickname}</div>
                            </div>
                            <div>{comment?.updateDate}</div>
                        </div>
                        <div css={s.comment}>{comment?.boardComment}</div>
                    </div>
                ))}
            </div>
            <div css={s.commentWriteBox}>
                <div css={s.profileBox}>
                    <img src={principalData?.data.profileImg} alt="" />
                    <div>{principalData?.data.nickname}</div>
                </div>
                <div css={s.inputBox}>
                    <textarea
                        name=""
                        id=""
                        wrap="on"
                        value={commentInputValue}
                        onChange={handleCommentInputOnChange}
                        placeholder="댓글을 입력해주세요"
                    ></textarea>
                    <button
                        onClick={handleCommentSubmitClick}
                        css={s.submitButton(commentInputValue)}
                    >
                        <FaArrowCircleUp />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BoardCommentComponent;
