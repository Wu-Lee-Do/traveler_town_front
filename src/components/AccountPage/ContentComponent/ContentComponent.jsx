/** @jsxImportSource @emotion/react */
import { FaBookmark, FaHeart } from "react-icons/fa";
import * as s from "./style";
import { BiSolidComment } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { removeBoard } from "../../../apis/board/boardApi";
import { BsThreeDotsVertical } from "react-icons/bs";

function ContentComponent({
    profileImg,
    nickname,
    boardContent,
    boardTitle,
    boardCommentCount,
    boardBookmarkCount,
    boardLikeCount,
    updateDate,
    boardCategoryId,
    boardId,
    userId,
}) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const removeBoardMutation = useMutation({
        mutationKey: "removeBoardMutation",
        mutationFn: removeBoard,
        onSuccess: (response) => {
            if (response.data === 1) {
                alert("삭제 되었습니다.");
                window.location.reload();
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleRemoveClick = () => {
        if (window.confirm("정말 게시물을 삭제하시겠습니까?")) {
            removeBoardMutation.mutate(boardId);
        } else {
            return;
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div css={s.contentBox}>
            <div css={s.contentHeader}>
                <div css={s.contentProfile}>
                    <div
                        onClick={
                            userId === principalData?.data.userId
                                ? () =>
                                      window.location.replace(`/account/mypage`)
                                : () =>
                                      window.location.replace(
                                          `/profile?profile=${nickname}`
                                      )
                        }
                    >
                        <img src={profileImg} alt="" />
                    </div>
                    <div>
                        <div
                            onClick={
                                userId === principalData?.data.userId
                                    ? () =>
                                          window.location.replace(
                                              `/account/mypage`
                                          )
                                    : () =>
                                          window.location.replace(
                                              `/profile?profile=${nickname}`
                                          )
                            }
                        >
                            {nickname}
                        </div>
                        <div>{formatDate(updateDate)}</div>
                    </div>
                </div>
                {principalData?.data.userId === userId ? (
                    <div css={s.headerButtonBox} ref={dropdownRef}>
                        <button onClick={toggleDropdown}>
                            <BsThreeDotsVertical />
                        </button>

                        <ul css={s.dropdownMenu(isDropdownVisible)}>
                            <li
                                onClick={
                                    boardCategoryId === 1
                                        ? () =>
                                              window.location.replace(
                                                  `/board/mustgorestaurant/${boardId}/update`
                                              )
                                        : boardCategoryId === 2
                                        ? () =>
                                              window.location.replace(
                                                  `/board/travel/${boardId}/update`
                                              )
                                        : () =>
                                              window.location.replace(
                                                  `/board/together/${boardId}/update`
                                              )
                                }
                            >
                                수정
                            </li>
                            <li onClick={handleRemoveClick}>삭제</li>
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div
                css={s.contentMain}
                onClick={
                    boardCategoryId === 1
                        ? () =>
                              window.location.replace(
                                  `/board/mustgorestaurant/${boardId}`
                              )
                        : boardCategoryId === 2
                        ? () =>
                              window.location.replace(
                                  `/board/travel/${boardId}`
                              )
                        : () =>
                              window.location.replace(
                                  `/board/together/${boardId}`
                              )
                }
            >
                <div>
                    <h3>{boardTitle}</h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: boardContent,
                        }}
                    ></div>
                </div>
            </div>
            <div css={s.contentBottom}>
                <div>
                    <BiSolidComment />
                    <span>{boardCommentCount}</span>
                </div>
                <div>
                    <FaHeart />
                    <span>{boardLikeCount}</span>
                </div>
                <div>
                    <FaBookmark />
                    <span>{boardBookmarkCount}</span>
                </div>
            </div>
        </div>
    );
}

export default ContentComponent;
