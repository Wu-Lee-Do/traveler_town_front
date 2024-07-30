/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/usa.webp";
import { BiSolidComment } from "react-icons/bi";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function BoardCardComponent({
    boardId,
    boardTitle,
    boardContent,
    createDate,
    updateDate,
    profileImg,
    nickname,
    countryNameKor,
    countryCode,
    boardBookmarkCount,
    boardLikeCount,
    boardCommentCount,
    detailUrl,
    sex,
    age,
}) {
    const imgTagRegex = /<img[^>]+src="([^">]+)"/i;
    const match = boardContent.match(imgTagRegex);
    const [imgUrl, setImgUrl] = useState();
    const navigate = useNavigate();

    const removeHtmlTags = (boardContent) => {
        return boardContent.replace(/<[^>]*>/g, "");
    };

    // const dateString = (createDate) => {
    //     const date = new Date(createDate);
    //     const year = String(date.getFullYear()).slice(-2);
    //     const month = String(date.getMonth() + 1).padStart(2, "0");
    //     const day = String(date.getDate()).padStart(2, "0");
    //     return `${year}.${month}.${day}`;
    // };

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

    const handleBoardCardClick = () => {
        navigate(`/board/${detailUrl}/${boardId}`);
    };

    useEffect(() => {
        const storage = getStorage();
        getDownloadURL(ref(storage, `country/${countryCode}.gif`))
            .then((url) => {
                setImgUrl(url);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [countryCode]);

    return (
        <div css={s.boardCard} onClick={handleBoardCardClick}>
            <div css={s.category}>{countryNameKor}</div>
            <div css={s.imgBox}>
                <img src={match ? match[1] : imgUrl} alt="" />
            </div>

            <div css={s.boardInfo}>
                <div css={s.boardText}>
                    <h3>{boardTitle}</h3>
                    <div>{removeHtmlTags(boardContent)}</div>
                    <div>{getTimeDifference(createDate)}</div>
                </div>
                <div css={s.profileBox}>
                    <div>
                        <img src={profileImg} alt="" />
                        <div css={s.nickname}>{nickname}</div>
                        {detailUrl === "together" ? (
                            <div css={s.profileDetailInfo}>
                                <div>{sex === 1 ? "• 남자" : "• 여자"}</div>
                                <div>• {age}대</div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div>
                        <BiSolidComment />
                        <span>{boardCommentCount}</span>
                        <FaHeart />
                        <span>{boardLikeCount}</span>
                        <FaBookmark />
                        <span>{boardBookmarkCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardCardComponent;
