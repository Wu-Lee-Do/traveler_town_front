import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    padding-top: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const box = css`
    width: 1136px;
    height: auto;
`;

export const titleBox = css`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 {
        cursor: default;
    }
`;

export const profileBox = css`
    display: flex;
    align-items: center;
    height: 38.5px;
    font-size: 1.3em;
    font-weight: 600;

    & > img {
        box-sizing: border-box;
        margin: 0 10px;
        width: 30px;
        border-radius: 50px;
        border: 1px solid #dbdbdb;
    }
`;

export const contentBox = css`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > div:nth-of-type(1) {
        width: 70%;
    }

    & > div:nth-of-type(2) {
        width: 29%;
        height: 700px;
        border-radius: 15px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    }
`;
