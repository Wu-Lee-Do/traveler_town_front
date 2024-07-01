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
`;

export const boardInfo = css`
    width: 93%;
    display: flex;
    flex-direction: column;
`;

export const boardHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-of-type(1) {
        width: 100%;
        font-size: 28px;
        font-weight: 500;
        padding: 20px 0;
        color: #333333;
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
    top: 100%;
    right: 0;
    background: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: 0;
    margin: 0;
    transition: 0.2s height ease-in-out, border 0.5s ease-in-out;

    li {
        padding: 8px 16px;
        cursor: pointer;
        &:hover {
            background: #f0f0f0;
        }
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
    cursor: pointer;
    width: auto;
    height: auto;
    margin-right: 15px;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    color: #9a9a9a;
    background-color: rgb(248, 248, 248);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: rgba(228, 228, 228);
    }
`;

export const date = css`
    font-size: 18px;
    color: #333333;
`;
