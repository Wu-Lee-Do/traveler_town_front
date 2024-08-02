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
    cursor: default;

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

export const headerButtonBox = css`
    position: relative;
    & > button {
        font-size: 26px;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 5px;
        border-radius: 50px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`;

export const dropdownMenu = (isDropdownVisible) => css`
    position: absolute;
    width: 60px;
    height: ${isDropdownVisible ? "71px" : 0};
    border-radius: 15px;
    overflow: hidden;
    top: 80%;
    right: 0;
    background: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: 0;
    margin: 0;
    transition: 0.2s height ease-in-out, border 0.5s ease-in-out;

    li {
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
            background: #f0f0f0;
        }
    }
`;

export const contentMain = css`
    max-height: 500px;
    padding: 20px;
    overflow: auto;
    cursor: pointer;

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
