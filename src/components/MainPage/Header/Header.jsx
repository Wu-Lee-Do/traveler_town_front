/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { FaHeart } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleLoginClick = () => {
        navigate("/auth/signin");
    };

    const handleProfileClick = () => {
        navigate("/account/mypage/info");
    };

    const handleTogetherClick = () => {
        navigate("/board/together");
    };

    const handleTravelClick = () => {
        navigate("/board/travel");
    };

    const handleMustGoRestaurantClick = () => {
        navigate("/board/mustgorestaurant");
    };

    const handleBookmarkClick = () => {
        navigate("/board/bookmark");
    };

    return (
        <div css={s.header(scrollPosition)}>
            <div css={s.navBox}>
                <div css={s.logo} onClick={handleLogoClick}>
                    <img src={logo} alt="" />
                    TravelerTown
                </div>
                <div css={s.menu}>
                    <div onClick={handleTogetherClick}>동행</div>
                    <div onClick={handleTravelClick}>여행지</div>
                    <div onClick={handleMustGoRestaurantClick}>맛집</div>
                    <div onClick={handleBookmarkClick}>즐겨찾기</div>
                </div>
                {!!principalData ? (
                    <div css={s.profileBox} onClick={handleProfileClick}>
                        <img src={principalData.data.profileImg} alt="" />
                        {principalData.data.nickname}
                    </div>
                ) : (
                    <div css={s.login} onClick={handleLoginClick}>
                        로그인
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
