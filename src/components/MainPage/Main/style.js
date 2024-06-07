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
    font-size: 54px;
    font-weight: 700;
    text-align: center;
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
    }
`;

export const bannerBox = css`
    width: 1136px;
    height: 500px;
    margin-top: 64px;
    border-radius: 15px;
    background-color: black;
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
        rgba(20, 20, 20, 0.35) 25%,
        rgba(20, 20, 20, 0.5) 50%,
        rgba(20, 20, 20, 0.65) 75%,
        rgba(20, 20, 20, 0.7) 100%
    );
    position: absolute;
    display: flex;
    align-items: center;
    & > h1 {
        font-size: 40px;
        font-weight: 600;
        color: white;
        padding-left: 50px;
        padding-top: 50px;
    }
`;
