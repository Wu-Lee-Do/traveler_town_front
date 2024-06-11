/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/defaultImg.webp";
import { useQueryClient } from "react-query";
import { instance } from "../../../apis/utils/instance";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../hooks/useAuthCheck";

function AccountPage() {
    useAuthCheck();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    console.log(principalData);

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
        alert("로그아웃 되었습니다.");
        window.location.href = "/";
    };

    return (
        <div css={s.layout}>
            <div css={s.accountBox}>
                <div css={s.sideBar}>
                    <div css={s.profileBox}>
                        <img src={defaultImg} alt="" />
                        {principalData?.data.nickname}
                    </div>
                    <div onClick={handleLogoutClick}>로그아웃</div>
                </div>
                <div css={s.mainBox}>right</div>
            </div>
        </div>
    );
}

export default AccountPage;
