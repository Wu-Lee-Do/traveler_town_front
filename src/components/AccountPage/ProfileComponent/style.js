import { css } from "@emotion/react";

export const infoLayout = css`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const infoBox = css`
    position: absolute;
    z-index: 99;
    top: -70px;
    width: 1136px;
    height: 220px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
`;

export const profileBox = css`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const profileImgBox = css`
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 200px;
    border: 1px solid #dbdbdb;

    & > img {
        width: 100%;
    }
`;

export const profileNickname = css`
    font-size: 18px;
    font-weight: 600;
`;

export const profileInfo = css`
    width: 400px;
    display: flex;
    justify-content: space-around;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-of-type(1) {
            font-size: 20px;
            font-weight: 600;
        }
    }
`;
