import { css } from "@emotion/react";

export const searchInput = css`
    width: 230px;
    height: 19px;
    border: none;
    outline: none;
    padding: 10px 5px;
    font-size: 16px;
    margin-right: 10px;
    border-bottom: 1px solid #dbdbdb;
`;

export const searchButton = css`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.1s ease-in-out;
    border: none;
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
