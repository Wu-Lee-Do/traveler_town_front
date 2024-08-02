/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import img from "../../assets/banner1.jpg";
import ProfileComponent from "../../components/AccountPage/ProfileComponent/ProfileComponent";
import { LuArrowUpToLine } from "react-icons/lu";
import { getProfileByNickname } from "../../apis/account/accountApi";
import { useSearchParams } from "react-router-dom";

function ProfilePage(props) {
    const [searchParams] = useSearchParams();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [profileData, setProfileData] = useState();

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });
    const getProfileQuery = useQuery(
        ["getProfileQuery"],
        async () => await getProfileByNickname(searchParams.get("profile")),
        {
            onSuccess: (response) => {
                setProfileData(response);
                console.log(response);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const handleUpButtonClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div css={s.layout}>
            <div css={s.bgImgBox}>
                <img src={img} alt="" />
            </div>
            <ProfileComponent profileData={profileData} />
            <div css={s.upButton(scrollPosition)} onClick={handleUpButtonClick}>
                <LuArrowUpToLine />
            </div>
        </div>
    );
}

export default ProfilePage;
