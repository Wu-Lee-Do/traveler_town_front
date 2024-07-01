import { css } from "@emotion/react";

export const layout = css`
    position: relative;
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
    margin-bottom: 50px;
    height: auto;
    display: flex;
    justify-content: space-around;
`;

export const stickyLayout = css`
    position: sticky;
    width: 60px;
    height: 130px;
    margin-right: 5px;
    top: 75px;
    margin-top: 80px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const stickyBox = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > button {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: #f2f2f2;
        }

        & > span {
            margin-top: 5px;
            font-size: 16px;
            color: #333333;
        }
    }

    & > button:nth-of-type(1) {
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
    }
`;

export const titleBox = css`
    width: 725px;
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
    width: 1050px;
    min-height: 700px;
    justify-content: space-between;

    & > div:nth-of-type(1) {
        width: 70%;
        min-height: 670px;
        margin-right: 15px;
    }

    & > div:nth-of-type(2) {
        width: 310px;
        height: 670px;
        border-radius: 15px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    }
`;

export const commentLayout = css`
    position: sticky;
    top: 75px;
`;
