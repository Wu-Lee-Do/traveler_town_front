/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { removeBoard } from "../../../apis/board/boardApi";

function BoardDetailComponent({
    boardId,
    userId,
    boardTitle,
    boardContent,
    countryNameKor,
    updateDate,
}) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const location = useLocation();
    const navigate = useNavigate();

    const removeBoardMutation = useMutation({
        mutationKey: "removeBoardMutation",
        mutationFn: removeBoard,
        onSuccess: (response) => {
            if (response.data === 1) {
                alert("삭제 되었습니다.");
                navigate(`/board/${location.pathname.split("/")[2]}`);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleCountryClick = () => {
        window.location.replace(`/country?search=${countryNameKor}`);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownVisible(false);
        }
    };

    const handleEditClick = () => {
        navigate("update");
    };

    const handleRemoveClick = () => {
        if (window.confirm("정말 게시물을 삭제하시겠습니까?")) {
            removeBoardMutation.mutate(boardId);
        } else {
            return;
        }
    };

    const getTimeDifference = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const differenceInMilliseconds = now - date;
        const differenceInMinutes = Math.floor(
            differenceInMilliseconds / (1000 * 60)
        );

        if (differenceInMinutes < 1) {
            return "방금";
        } else if (differenceInMinutes < 60) {
            return `${differenceInMinutes}분 전`;
        } else if (differenceInMinutes < 1440) {
            const differenceInHours = Math.floor(differenceInMinutes / 60);
            return `${differenceInHours}시간 전`;
        } else {
            const differenceInDays = Math.floor(differenceInMinutes / 1440);
            return `${differenceInDays}일 전`;
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.boardInfo}>
                    <div css={s.boardHeader}>
                        <div>{boardTitle}</div>
                        {principalData?.data.userId === userId ? (
                            <div css={s.headerButtonBox} ref={dropdownRef}>
                                <button onClick={toggleDropdown}>
                                    <BsThreeDotsVertical />
                                </button>

                                <ul css={s.dropdownMenu(isDropdownVisible)}>
                                    <li onClick={handleEditClick}>수정</li>
                                    <li onClick={handleRemoveClick}>삭제</li>
                                </ul>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div css={s.boardDetailInfo}>
                        <div css={s.category} onClick={handleCountryClick}>
                            {countryNameKor}
                        </div>
                        <div css={s.date}>{getTimeDifference(updateDate)}</div>
                    </div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: boardContent,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailComponent;
