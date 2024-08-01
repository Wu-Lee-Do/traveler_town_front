/** @jsxImportSource @emotion/react */
import { FaBookmark, FaHeart } from "react-icons/fa";
import * as s from "./style";
import { BiSolidComment } from "react-icons/bi";

function ContentComponent({
    profileImg,
    nickname,
    boardContent,
    boardTitle,
    boardCommentCount,
    boardBookmarkCount,
    boardLikeCount,
    updateDate,
}) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };
    return (
        <div css={s.contentBox}>
            <div css={s.contentHeader}>
                <div css={s.contentProfile}>
                    <div>
                        <img src={profileImg} alt="" />
                    </div>
                    <div>
                        <div>{nickname}</div>
                        <div>{formatDate(updateDate)}</div>
                    </div>
                </div>
                <div>=</div>
            </div>
            <div css={s.contentMain}>
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
