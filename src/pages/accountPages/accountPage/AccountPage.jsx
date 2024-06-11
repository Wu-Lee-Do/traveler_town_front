/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/defaultImg.webp";
import { useQueryClient } from "react-query";

function AccountPage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    console.log(principalData);

    return (
        <div css={s.layout}>
            <div css={s.accountBox}>
                <div css={s.sideBar}>
                    <div css={s.profileBox}>
                        <img src={defaultImg} alt="" />
                        {principalData?.data.nickname}
                    </div>
                    <div>로그아웃</div>
                </div>
                <div css={s.mainBox}>right</div>
            </div>
        </div>
    );
}

export default AccountPage;
