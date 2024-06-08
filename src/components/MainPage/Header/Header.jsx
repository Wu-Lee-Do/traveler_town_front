/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
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
                <div css={s.login} onClick={handleLoginClick}>
                    로그인
                </div>
            </div>
        </div>
    );
}

export default Header;
