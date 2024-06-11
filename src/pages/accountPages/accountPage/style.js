import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const accountBox = css`
    box-sizing: border-box;
    overflow: hidden;
    width: 1136px;
    height: 80vh;
    border-radius: 15px;
    border: 2px solid #dbdbdb;
    display: flex;
`;

export const sideBar = css`
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    background-color: #fafafa;
    border-right: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const profileBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    border-bottom: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;

    & > img {
        box-sizing: border-box;
        width: 120px;
        border-radius: 120px;
        border: 1px solid #dbdbdb;
        margin-bottom: 10px;
    }
`;

export const mainBox = css``;
