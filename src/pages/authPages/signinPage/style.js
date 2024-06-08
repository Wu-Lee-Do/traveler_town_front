import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 90%;
    padding-top: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const loginBox = css`
    width: 500px;
    height: 500px;
    margin-top: 30px;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const title = css`
    width: 100%;
    height: 25%;
    font-size: 35px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

export const inputBox = css`
    width: 400px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div:nth-of-type(3) {
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
    }

    & > div {
        width: 100%;

        & > div {
            font-size: 14px;
            font-weight: 600;
            cursor: default;
        }
        & > input {
            box-sizing: border-box;
            border: 2px solid #c0c0c0;
            border-radius: 4px;
            width: 100%;
            height: 48px;
            padding: 4px 4px 4px 8px;
            font-size: 14px;
            font-weight: 400;
            outline: none;
            margin-top: 8px;
            margin-bottom: 16px;
        }
    }
`;

export const buttonBox = css`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        width: 321px;
        height: 56px;
        padding: 18px 24px;
        border-radius: 28px;
        background-color: black;
        color: white;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
`;
