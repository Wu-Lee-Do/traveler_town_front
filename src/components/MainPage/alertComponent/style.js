import { css } from "@emotion/react";

export const layout = css`
    margin-top: 64px;
    width: 100%;
    height: 550px;
    background-color: #fe7864;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const newAlertPost = css`
    cursor: default;
    color: white;
`;

export const postBox = css`
    width: 1136px;
    display: flex;
    justify-content: center;

    & > ul {
        padding: 0;
    }
`;

export const post = css`
    width: 1136px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
        margin: 0;
        color: white;
    }

    & > div {
        display: flex;
    }
`;

export const imgBox = css`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    & > img {
        width: 100%;
    }
`;

export const countryNameBox = css`
    width: 170px;

    & > h3 {
        margin: 7px 0;
        font-size: 20px;
        font-weight: 800;
        color: white;
    }
`;

export const category = (data) => css`
    width: 50px;

    & > h3 {
        margin: 7px 0;
        font-size: 20px;
        font-weight: 800;
        color: ${data === "주의" ? "rgb(191, 67, 35)" : "rgb(63, 109,174)"};
    }
`;

export const content = css`
    margin: 7px 0;
    font-size: 20px;
    font-weight: 800;
    color: white;
`;
