import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    background-color: white;
    margin-top: 60px;
    padding-bottom: 30px;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const title = css`
    width: 100%;
    display: flex;
    justify-content: start;
    margin-left: 60px;
`;

export const reviewLayout = css`
    box-sizing: border-box;
    width: 95%;
    border-top: 1px solid #dbdbdb;
`;

export const profileBox = css`
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;

    & > div {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
    }

    & > div > img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
    }
`;

export const profileDisplayName = css`
    padding-left: 10px;
`;

export const profileText = css`
    padding-left: 10px;
    font-weight: 400;
    color: #444444;
`;

export const rating = css`
    margin-top: 20px;
    padding: 0;
    width: 100px;
    height: 20px;
`;

export const reviewText = css`
    width: 95%;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    line-height: 170%;
    padding-top: 20px;
`;
