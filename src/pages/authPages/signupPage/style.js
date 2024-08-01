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
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const title = css`
    width: 100%;
    height: 50px;
    font-size: 35px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

export const inputBox = css`
    width: 400px;
    height: 340px;
    display: flex;
    flex-direction: column;
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
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
