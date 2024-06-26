import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;

export const box = css`
    width: 100%;
    min-height: 700px;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const boardInfo = css`
    width: 93%;
    display: flex;
    flex-direction: column;

    & > div:nth-of-type(1) {
        width: 100%;
        font-size: 28px;
        font-weight: 500;
        padding: 20px 0;
        color: #333333;
    }
`;

export const boardDetailInfo = css`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
`;

export const category = css`
    width: auto;
    height: auto;
    margin-right: 15px;
    padding: 5px;
    border-radius: 10px;
    font-size: 18px;
    color: #333333;
    background-color: rgb(248, 248, 248);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const date = css`
    font-size: 18px;
    color: #333333;
`;
