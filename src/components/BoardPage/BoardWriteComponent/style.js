import { css } from "@emotion/react";

export const layout = css`
    padding: 20px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    border-radius: 15px;
`;

export const titleLayout = css`
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
`;

export const boardTitleInput = css`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 2em;
    font-weight: 600;
`;

export const countriesLayout = css`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center
`;

export const countriesCard = css`
    padding: 10px;
    width: 230px;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
`;

export const submitButton = css`
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        background-color: #dbdbdb;
    }
`;

export const countriesSelectInput = css`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
`;

export const writeLayout = css`
    margin-top: 20px;
    width: 100%;
`;
