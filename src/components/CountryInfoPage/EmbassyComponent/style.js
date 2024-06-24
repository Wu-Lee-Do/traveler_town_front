import { css } from "@emotion/react";

export const layout = css`
    width: 1136px;
    height: auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;

    & > h1 {
        width: 100%;
        color: black;
        cursor: default;
    }
`;

export const emBassyLayout = css`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    & > div {
        width: 100%;
        padding-right: 40px;
        margin-bottom: 10px;
        display: flex;
        justify-content: right;
        font-size: 20px;
        font-weight: 600;
        color: rgb(191, 67, 35);
    }
`;

export const embassyBox = css`
    width: 100%;
    height: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    line-height: 250%;
    transition: all 0.2s ease-in-out;

    &:hover {
        height: 250px;
        box-sizing: border-box;
        border-top: 2px solid black;
        padding-top: 10px;

        & > div:nth-of-type(2) {
            box-sizing: border-box;
            border-bottom: 2px solid black;
            padding-bottom: 10px;
        }
    }
`;

export const displayBox = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const hiddenBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const embassyTitle = css`
    width: 25%;
    font-size: 18px;
`;

export const embassyName = css`
    width: 50%;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
`;

export const embassyType = css`
    width: 20%;
    font-size: 18px;
`;

export const embassyEmerNum = css`
    display: flex;
    justify-content: right;
    width: 30%;
`;

export const embassyInfo = css`
    width: 25%;
    font-size: 18px;
`;
