import { css } from "@emotion/react";

export const contentBox = css`
    width: 630px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const contentHeader = css`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-of-type(2) {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
`;

export const contentProfile = css`
    padding-left: 20px;
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;

    & > div:nth-of-type(1) {
        box-sizing: border-box;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 50px;
        border: 1px solid #dbdbdb;

        & > img {
            width: 100%;
        }
    }

    & > div:nth-of-type(2) {
        & > div:nth-of-type(1) {
            font-size: 14px;
            font-weight: 700;
            margin-left: 10px;
        }

        & > div:nth-of-type(2) {
            font-size: 14px;
            color: #333;
            margin-left: 10px;
        }
    }
`;

export const contentMain = css`
    max-height: 500px;
    padding: 20px;
    overflow: auto;

    & > div > h3 {
        margin-top: 0px;
    }
`;

export const contentBottom = css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        margin-left: 30px;

        & > span {
            font-size: 16px;
            font-weight: 600;
            margin-left: 5px;
        }
    }
`;
