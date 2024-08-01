import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 90%;
    padding-top: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: 1136px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const inputBox = css`
    width: 400px;
    height: 300px;
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

            &:focus {
                border: 2px solid rgb(44, 89, 129);
            }
        }
    }
`;

export const buttonBox = css`
    width: 100%;
    display: flex;
    justify-content: end;
`;

export const button = css`
    width: 80px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    background-color: black;
    border-radius: 30px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #000000d4;
    }
`;
