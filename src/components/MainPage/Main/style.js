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
