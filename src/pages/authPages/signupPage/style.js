import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 90%;
    padding-top: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const signinBox = css`
    width: 500px;
    height: 700px;
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
    height: 20%;
    font-size: 35px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

export const inputBox = css`
    width: 400px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
        width: 100%;

        & > div {
            font-size: 14px;
            font-weight: 600;
            cursor: default;
        }
    }
`;

export const buttonBox = css`
    width: 100%;
    height: 20%;
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
