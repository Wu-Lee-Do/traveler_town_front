/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/defaultImg.webp";
import { useQueryClient } from "react-query";
import { instance } from "../../../apis/utils/instance";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { Route, Routes, useNavigate } from "react-router-dom";
import InfoComponent from "../../../components/AccountPage/InfoComponent/InfoComponent";
import EditPasswordComponent from "../../../components/AccountPage/EditPasswordComponent/EditPasswordComponent";

function AccountPage() {
    // useAuthCheck();
    const navigate = useNavigate();
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

    const handleInfoClick = () => {
        navigate("/account/mypage/info");
    };

    const handleEditPasswordClick = () => {
        navigate("/account/mypage/edit");
    };

    return (
        <div css={s.layout}>
            <div css={s.accountBox}>
                <div css={s.sideBar}>
                    <div css={s.profileBox}>
                        <img src={principalData?.data.profileImg} alt="" />
                        {principalData?.data.nickname}
                    </div>
                    <div css={s.menuBox}>
                        <div>
                            <div onClick={handleInfoClick}>내 정보</div>
                            <div onClick={handleEditPasswordClick}>
                                비밀번호 변경
                            </div>
                        </div>
                        <div onClick={handleLogoutClick}>로그아웃</div>
                    </div>
                </div>
                <div css={s.mainBox}>
                    <Routes>
                        <Route
                            path="/info"
                            element={
                                <InfoComponent profileData={principalData} />
                            }
                        />
                        <Route
                            path="/edit"
                            element={<EditPasswordComponent />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
