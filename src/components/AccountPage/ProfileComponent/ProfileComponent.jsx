/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { BiSolidComment } from "react-icons/bi";
import { FaHeart, FaBookmark } from "react-icons/fa";
import * as s from "./style";

function ProfileComponent({ principalData }) {
    const [categoryState, setCategoryState] = useState(1);
    const handleCategoryClick = (category) => {
        setCategoryState(category);
    };
    return (
        <div css={s.infoLayout}>
            <div css={s.infoBox}>
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
                        <div>8</div>
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
                <dir>setting</dir>
            </div>
            <div css={s.mainBox}>
                <div css={s.mainHeader(categoryState)}>
                    <div onClick={() => handleCategoryClick(1)}>게시물</div>
                    <div onClick={() => handleCategoryClick(2)}>댓글</div>
                    <div onClick={() => handleCategoryClick(3)}>좋아요</div>
                </div>
                <div css={s.contentLayout}>
                    <div css={s.contentBox}>
                        <div css={s.contentHeader}>
                            <div css={s.contentProfile}>
                                <div>
                                    <img
                                        src={principalData?.data.profileImg}
                                        alt=""
                                    />
                                </div>
                                <div>{principalData?.data.nickname}</div>
                            </div>
                            <div>=</div>
                        </div>
                        <div css={s.contentMain}></div>
                        <div css={s.contentBottom}>
                            <div>
                                <BiSolidComment />
                                <span>8</span>
                            </div>
                            <div>
                                <FaHeart />
                                <span>6</span>
                            </div>
                            <div>
                                <FaBookmark />
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
