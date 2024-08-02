import { css } from "@emotion/react";

export const infoLayout = css`
    position: relative;
    width: 1136px;
    height: auto;
    top: -70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    justify-content: center;
`;

export const infoBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;

    & > div {
        display: flex;
        align-items: center;
    }
`;

export const profileBox = css`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const profileImgBox = css`
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 200px;
    border: 1px solid #dbdbdb;

    & > img {
        width: 100%;
    }
`;

export const profileNickname = css`
    font-size: 18px;
    font-weight: 600;
`;

export const profileInfo = css`
    width: 400px;
    display: flex;
    justify-content: space-around;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-of-type(1) {
            font-size: 20px;
            font-weight: 600;
        }
    }
`;

export const settingButtonBox = css`
    position: absolute;
    top: 10px;
    right: 10px;
    & > button {
        font-size: 28px;
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
    width: 120px;
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
        font-size: 16px;
        cursor: pointer;
        &:hover {
            background: #f0f0f0;
        }
    }
`;

export const mainBox = css`
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const mainHeader = (categoryState) => css`
    width: 300px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
        cursor: pointer;
    }

    & > div:nth-of-type(${categoryState}) {
        text-decoration: underline;
        text-underline-offset: 7px;
    }
`;

export const contentLayout = css`
    width: 630px;
    height: auto;
`;
