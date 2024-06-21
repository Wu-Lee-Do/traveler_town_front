import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: auto;
    padding-top: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const box = css`
    width: 1136px;
    height: auto;

    & > h1 {
        cursor: default;
    }
`;

export const titleBox = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const searchBox = css`
    width: 300px;
    height: 48px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    & > input {
        width: 693px;
        height: 19px;
        border: none;
        outline: none;
        margin-left: 15px;
        font-size: 16px;
    }

    & > button {
        padding-right: 10px;
        border: none;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const listHeader = css`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 30px 0;

    & > div {
        margin: 0 25px;
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            text-underline-offset: 5px;
        }
    }
`;

export const listLayout = css`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const listWrap = css`
    width: 1136px;
    display: grid;
    grid-template-columns: repeat(3, calc(33.33% - 32px * 2 / 3));
    grid-gap: 32px;
`;

export const countryCard = css`
    width: 100%;
    height: 240px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    transition: 0.2s ease-in-out;
    overflow: hidden;

    &:hover {
        margin-top: -10px;
    }
`;

export const imgBox = css`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const boardText = css`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
