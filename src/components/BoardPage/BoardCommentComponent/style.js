import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const titled = (scrollPosition) => css`
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 60px;
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
    height: 500px;
    width: 310px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-wrap: break-word;
`;

export const box = css`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
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
        padding: 10px;

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
    width: auto;
    height: auto;
    padding: 10px;
`;

export const commentWriteBox = css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 110px;
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
    padding: 5px 10px;
`;

export const inputBox = css`
    padding-left: 10px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > textarea {
        resize: none;
        width: 100%;
        height: 60px;
        border: none;
        border-top: 1px solid #dbdbdb;
        padding-top: 10px;
        &:focus {
            outline: none;
        }
    }
`;

export const submitButton = (commentInputValue) => css`
    padding: 0;
    width: 30px;
    height: 30px;
    font-size: 25px;
    margin-right: 5px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    color: ${commentInputValue.length === 0 ? "#eee" : "rgb(22, 68, 113)"};
    cursor: ${commentInputValue.length === 0 ? "default" : "pointer"};
`;
