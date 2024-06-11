import { css } from "@emotion/react";

export const header = (scrollPosition) => css`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 68px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: ${scrollPosition > 10 ? "1px solid #dbdbdb" : "none"};
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
    cursor: pointer;

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
        padding: 0px 16px;
        height: 42px;
        font-size: 18px;
        font-weight: 700;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background-color: #f2f2f2;
        }
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
    cursor: pointer;

    &:hover {
        background-color: #000000d4;
    }
`;

export const profileBox = css`
    /* width: 73.52px; */
    height: 42px;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    & > img {
        width: 35px;
        height: 35px;
        border-radius: 50px;
        border: 1px solid #dbdbdb;
        margin-right: 5px;
    }
`;
