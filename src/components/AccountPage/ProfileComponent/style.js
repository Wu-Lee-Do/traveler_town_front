import { css } from "@emotion/react";

export const infoLayout = css`
    position: relative;
    width: 1136px;
    height: auto;
    top: -70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    justify-content: center;
`;

export const infoBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
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

export const mainBox = css`
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const mainHeader = (categoryState) => css`
    width: 300px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
        cursor: pointer;
    }

    & > div:nth-of-type(${categoryState}) {
        text-decoration: underline;
        text-underline-offset: 7px;
    }
`;

export const contentLayout = css`
    width: 630px;
    height: auto;
`;

export const contentBox = css`
    width: 630px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const contentHeader = css`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-of-type(2) {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
`;

export const contentProfile = css`
    padding-left: 20px;
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;

    & > div:nth-of-type(1) {
        box-sizing: border-box;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 50px;
        border: 1px solid #dbdbdb;

        & > img {
            width: 100%;
        }
    }

    & > div:nth-of-type(2) {
        & > div:nth-of-type(1) {
            font-size: 14px;
            font-weight: 700;
            margin-left: 10px;
        }

        & > div:nth-of-type(2) {
            font-size: 14px;
            color: #333;
            margin-left: 10px;
        }
    }
`;

export const contentMain = css`
    max-height: 500px;
    padding: 20px;
    overflow: auto;

    & > div > h3 {
        margin-top: 0px;
    }
`;

export const contentBottom = css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        margin-left: 30px;

        & > span {
            font-size: 16px;
            font-weight: 600;
            margin-left: 5px;
        }
    }
`;
