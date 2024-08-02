/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { getBoardsByUserId } from "../../../apis/board/boardApi";
import { IoMdSettings } from "react-icons/io";
import ContentComponent from "../ContentComponent/ContentComponent";

function ProfileComponent({ principalData }) {
    const [categoryState, setCategoryState] = useState(1);
    const [boardData, setBoardData] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleCategoryClick = (category) => {
        setCategoryState(category);
    };

    const getBoardsByUserIdQuery = useQuery(
        ["getBoardsByUserIdQuery"],
        async () =>
            await getBoardsByUserId({
                userId: principalData?.data.userId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setBoardData(
                    response.data.sort(
                        (a, b) =>
                            new Date(b.createDate) - new Date(a.createDate)
                    )
                );
                console.log(response);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return (
        <div css={s.infoLayout}>
            <div css={s.infoBox}>
                <div>
                    <div css={s.profileBox}>
                        <div css={s.profileImgBox}>
                            <img src={principalData?.data.profileImg} alt="" />
                        </div>
                        <div css={s.profileNickname}>
                            {principalData?.data.nickname}
                        </div>
                    </div>
                    <div css={s.profileInfo}>
                        <div>
                            <div>{boardData.length}</div>
                            <div>게시물</div>
                        </div>
                        <div>
                            <div>623</div>
                            <div>팔로워</div>
                        </div>
                        <div>
                            <div>523</div>
                            <div>팔로잉</div>
                        </div>
                    </div>
                </div>
                <div css={s.settingButtonBox} ref={dropdownRef}>
                    <button onClick={toggleDropdown}>
                        <IoMdSettings />
                    </button>
                    <ul css={s.dropdownMenu(isDropdownVisible)}>
                        <li>배경화면 변경</li>
                        <li>계정설정</li>
                    </ul>
                </div>
            </div>
            <div css={s.mainBox}>
                <div css={s.mainHeader(categoryState)}>
                    <div onClick={() => handleCategoryClick(1)}>게시물</div>
                    <div onClick={() => handleCategoryClick(2)}>댓글</div>
                    <div onClick={() => handleCategoryClick(3)}>좋아요</div>
                </div>
                <div css={s.contentLayout}>
                    {boardData?.map((board, index) => (
                        <ContentComponent
                            boardBookmarkCount={board.boardBookmarkCount}
                            boardCommentCount={board.boardCommentCount}
                            boardContent={board.boardContent}
                            boardLikeCount={board.boardLikeCount}
                            boardTitle={board.boardTitle}
                            nickname={board.nickname}
                            profileImg={board.profileImg}
                            updateDate={board.updateDate}
                            boardCategoryId={board.boardCategoryId}
                            boardId={board.boardId}
                            key={index}
                            principalData={principalData}
                            userId={board.userId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
