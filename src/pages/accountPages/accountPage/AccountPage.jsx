/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from "react-query";
import { instance } from "../../../apis/utils/instance";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { Route, Routes, useNavigate } from "react-router-dom";
import InfoComponent from "../../../components/AccountPage/InfoComponent/InfoComponent";
import EditPasswordComponent from "../../../components/AccountPage/EditPasswordComponent/EditPasswordComponent";
import img from "../../../assets/banner1.jpg";
import ProfileComponent from "../../../components/AccountPage/ProfileComponent/ProfileComponent";

function AccountPage() {
    useAuthCheck();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const handleInfoClick = () => {
        navigate("/account/mypage/info");
    };

    const handleEditPasswordClick = () => {
        navigate("/account/mypage/edit");
    };

    return (
        <div css={s.layout}>
            <div css={s.bgImgBox}>
                <img src={img} alt="" />
            </div>
            <ProfileComponent principalData={principalData} />
        </div>
    );
}

export default AccountPage;
