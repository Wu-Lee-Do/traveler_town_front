import { css } from "@emotion/react";

export const boardCard = css`
    width: 100%;
    height: 370px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    transition: 0.2s ease-in-out;
    overflow: hidden;

    &:hover {
        margin-top: -10px;
    }
`;

export const imgBox = css`
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const boardInfo = css`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
`;

export const boardText = css`
    width: 100%;
    height: 75%;

    & > h3 {
        height: 20%;
        margin: 0;
        margin-bottom: 10px;
        padding: 20px 0 0 20px;
    }

    & > div {
        height: 80px;
        padding: 0 20px;
        color: #333333;
        font-size: 16px;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    }
`;

export const profileBox = css`
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
    }

    & > div > img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        margin-right: 10px;
        border-radius: 15px;
    }
`;

export const nickname = css`
    font-weight: 600;
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
