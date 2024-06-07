import { css } from "@emotion/react";

export const main = css`
    width: 100%;
    height: auto;
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
    border: 2px solid #dbdbdb;
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
`;

export const bannerBox = css`
    width: 1136px;
    height: 500px;
    margin-top: 64px;
    border-radius: 15px;
    /* background-color: black; */
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
`;

export const postLayout = css`
    width: 1136px;
    height: 300px;
    margin-top: 64px;
    /* background-color: gray; */
`;

export const postBox = css`
    width: 100%;
    height: 100%;
    background-color: skyblue;
    border-radius: 15px;
`;

export const postHeader = css`
    width: 100%;
    height: 20%;
    background-color: blue;
`;

export const profileImg = css`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50px;
    border: 1px solid #dbdbdb;
`;

export const nickname = css``;

export const postMain = css`
    width: 100%;
    height: 60%;
    background-color: red;
`;
export const postFooter = css`
    width: 100%;
    height: 20%;
    background-color: coral;
`;
