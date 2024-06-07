import { css } from "@emotion/react";

export const header = css`
    margin-top: 8px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const navBox = css`
    width: 1136px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const logo = css`
    width: 73.52px;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;

    & > img {
        width: 50px;
        height: 50px;
    }
`;

export const menu = css`
    width: 400px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
        font-size: 18px;
        font-weight: 700;
    }
`;

export const login = css`
    width: 73.52px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    background-color: black;
    border-radius: 30px;
    color: white;

    &:hover {
        background-color: #000000d4;
    }
`;
