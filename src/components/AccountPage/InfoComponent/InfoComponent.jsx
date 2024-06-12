/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/defaultImg.webp";

function InfoComponent({ profileData }) {
    return (
        <div css={s.infoLayout}>
            <h1>기본정보</h1>
            <div css={s.basicInfoBox}>
                <div css={s.profileBox}>
                    <img src={defaultImg} alt="" />
                    {profileData?.data.nickname}
                </div>
                <div css={s.infoBox}>
                    <div>
                        <div>{profileData?.data.username}</div>
                        <div></div>
                    </div>
                    <div>
                        <div>{profileData?.data.email}</div>
                        <button>인증하기</button>
                    </div>
                </div>
            </div>
            <h1>추가정보</h1>
            <div css={s.additionalInfoBox}>
                <div>
                    <div>
                        <div>성별</div>
                        <div>선택</div>
                    </div>
                    <div>
                        <div>나이</div>
                        <div>선택</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoComponent;
