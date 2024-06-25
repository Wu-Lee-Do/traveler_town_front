import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const titled = (scrollPosition) => css`
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 80px;
    margin: 0;
    padding: 0;
    position: sticky;
    top: 0;
    background-color: white;
    padding-left: 15px;
    box-shadow: ${scrollPosition > 10
        ? "0 2px 12px 0 rgba(0, 0, 0, 0.15);"
        : "none"};
    transition: 0.3s ease-in-out;

    & > h1 {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        padding: 5px 0;
        font-size: 20px;
    }
`;

export const boxLayout = css`
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const box = css`
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    padding: 10px 0;
    border-bottom: 1px solid #dbdbdb;
`;

export const info = css`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    & > div {
        display: flex;
        align-items: center;

        & > div {
            font-size: 16px;
            font-weight: 600;
        }
    }

    & > div:nth-of-type(2) {
        font-size: 14px;
    }

    & > div > img {
        box-sizing: border-box;
        width: 25px;
        border-radius: 15px;
        border: 1px solid #dbdbdb;
        margin-right: 5px;
    }
`;

export const comment = css`
    width: 100%;
    height: auto;
    padding-top: 10px;
`;

export const commentWriteBox = css`
    width: 100%;
    height: 170px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;

    & > div > img {
        box-sizing: border-box;
        width: 25px;
        border-radius: 15px;
        border: 1px solid #dbdbdb;
        margin-right: 5px;
    }
`;

export const profileBox = css`
    display: flex;
    align-items: center;
    padding: 10px 10px;
`;

export const inputBox = css`
    /* padding: 10px 10px; */
    height: 100%;

    & > input {
        border: none;
        width: 80%;
        padding: 5px 10px 5px 10px;
        background-color: gray;
    }
`;
