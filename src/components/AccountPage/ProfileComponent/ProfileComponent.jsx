/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { BiSolidComment } from "react-icons/bi";
import { FaHeart, FaBookmark } from "react-icons/fa";
import * as s from "./style";
import { useQuery } from "react-query";
import { getBoardsByUserId } from "../../../apis/board/boardApi";

function ProfileComponent({ principalData }) {
    const [categoryState, setCategoryState] = useState(1);
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
                                <div>
                                    <div>{principalData?.data.nickname}</div>
                                    <div>2024.03.33</div>
                                </div>
                            </div>
                            <div>=</div>
                        </div>
                        <div css={s.contentMain}>
                            <div>
                                <h3>아무거나 제목</h3>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Similique itaque doloribus
                                sunt a commodi culpa laborum nemo cumque libero
                                officia dolorem, perspiciatis qui eius
                                excepturi? Dicta laborum numquam consequatur
                                tempora. Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Cumque sit beatae qui, aliquam
                                dolorem dolorum aperiam necessitatibus libero
                                atque cupiditate magni ullam nisi iusto
                                voluptatibus quis quidem non labore nesciunt.
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur optio voluptate
                                est minima tempore. Quis libero, sed
                                consequuntur eveniet error ipsum perspiciatis
                                vitae a animi quod similique praesentium ab
                                quia? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero eos deserunt at
                            </div>
                        </div>
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
