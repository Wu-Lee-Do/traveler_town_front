import { css } from "@emotion/react";

export const main = css`
    width: 100%;
    height: auto;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const mainTitle = css`
    width: 1136px;
    height: 65px;
    margin-top: 48px;
    font-size: 44px;
    font-weight: 700;
    text-align: center;
    cursor: default;
`;

export const searchBox = css`
    width: 752px;
    height: 48px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    & > input {
        width: 693px;
        height: 19px;
        border: none;
        outline: none;
        padding-left: 10px;
        font-size: 16px;
    }

    & > button {
        border: none;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const bannerBox = css`
    width: 1136px;
    height: 500px;
    margin-top: 64px;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    overflow: hidden;
`;

export const banner = css`
    position: relative;
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const bannerTitle = css`
    z-index: 1;
    width: 100%;
    height: 50%;
    top: 50%;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0) 10%,
        rgba(20, 20, 20, 0.05) 15%,
        rgba(20, 20, 20, 0.1) 20%,
        rgba(20, 20, 20, 0.15) 25%,
        rgba(20, 20, 20, 0.2) 35%,
        rgba(20, 20, 20, 0.25) 50%,
        rgba(20, 20, 20, 0.3) 75%,
        rgba(20, 20, 20, 0.35) 100%
    );
    position: absolute;
    display: flex;
    align-items: center;
    cursor: default;

    & > h1 {
        font-size: 40px;
        font-weight: 600;
        color: white;
        padding-left: 50px;
        padding-top: 50px;
    }

    & > h3 {
        z-index: 999;
        font-size: 20px;
        font-weight: 600;
        color: white;
        position: absolute;
        bottom: 18px;
        left: 50px;
        text-decoration: underline;
        text-underline-offset: 10px;
        cursor: pointer;
    }
`;

export const togetherLayout = css`
    width: 1136px;
    height: 275px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
`;

export const togetherBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    width: 100%;
    height: 250px;
    overflow: hidden;
`;

export const togetherImg = css`
    width: 100%;
    height: 50%;
`;

export const toProfileImg = css`
    box-sizing: border-box;
    width: 38px;
    height: 38px;
    overflow: hidden;
    border-radius: 50px;
    border: 1px solid #dbdbdb;
    margin-left: 10px;
    margin-right: 10px;
`;

export const togetherInfo = css`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;

    & > div:nth-of-type(1) {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: start;
        padding: 10px;
        font-size: 16px;
        font-weight: 700;
        color: #252525;
    }

    & > div:nth-of-type(2) {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > div:nth-of-type(1) {
            display: flex;
            align-items: center;
        }
    }
`;

export const newPostTitle = css`
    margin-top: 64px;
    cursor: default;
`;

export const postLayout = css`
    width: 1136px;
    height: 300px;
`;

export const postBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid #dbdbdb;
`;

export const postHeader = css`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const category = css`
    width: auto;
    height: auto;
    margin-right: 15px;
    padding: 5px;
    border-radius: 10px;
    font-size: 13px;
    color: rgb(154, 154, 154);
    background-color: rgb(248, 248, 248);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const profileBox = css`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const profileImg = css`
    box-sizing: border-box;
    width: 43px;
    height: 43px;
    overflow: hidden;
    border-radius: 50px;
    border: 1px solid #dbdbdb;
    margin-left: 10px;
`;

export const infoBox = css`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 10px;
`;

export const nickname = css`
    font-size: 14px;
    font-weight: 700;
    color: #252525;
`;

export const time = css`
    font-size: 13px;
    color: #6a6a6a6a;
`;

export const postMain = css`
    box-sizing: border-box;
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
`;

export const content = css`
    width: 60%;
    height: 90%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const postImg = css`
    width: 100px;
    height: 100px;
    margin-left: 10px;
    border-radius: 10px;
    overflow: hidden;
`;
export const postFooter = css`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 15px;
        color: #919191;
    }

    & > div:nth-of-type(2) {
        box-sizing: border-box;
        border-right: 1px solid #dbdbdb;
        border-left: 1px solid #dbdbdb;
    }
`;
