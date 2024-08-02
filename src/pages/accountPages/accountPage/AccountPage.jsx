/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from "react-query";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import img from "../../../assets/banner1.jpg";
import ProfileComponent from "../../../components/AccountPage/ProfileComponent/ProfileComponent";
import { useEffect, useState } from "react";
import { LuArrowUpToLine } from "react-icons/lu";

function AccountPage() {
    useAuthCheck();
    const [scrollPosition, setScrollPosition] = useState(0);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });

    const handleUpButtonClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div css={s.layout}>
            <div css={s.bgImgBox}>
                <img src={img} alt="" />
            </div>
            <ProfileComponent profileData={principalData} />
            <div css={s.upButton(scrollPosition)} onClick={handleUpButtonClick}>
                <LuArrowUpToLine />
            </div>
        </div>
    );
}

export default AccountPage;
