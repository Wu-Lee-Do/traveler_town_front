/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from "../../../assets/logo.png";
import profileImg from "../../../assets/defaultImg.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

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
        navigate("/signin");
    };

    return (
        <div css={s.header(scrollPosition)}>
            <div css={s.navBox}>
                <div css={s.logo} onClick={handleLogoClick}>
                    <img src={logo} alt="" />
                    TravelerTown
                </div>
                <div css={s.menu}>
                    <div>동행</div>
                    <div>여행지</div>
                    <div>관광지</div>
                    <div>맛집</div>
                </div>
                {!!principalData ? (
                    <div css={s.profileBox}>
                        <img src={profileImg} alt="" />
                        {principalData.data.nickname}님
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
