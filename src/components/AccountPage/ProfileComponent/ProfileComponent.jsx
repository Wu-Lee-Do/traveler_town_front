/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ProfileComponent({ principalData }) {
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
        </div>
    );
}

export default ProfileComponent;
