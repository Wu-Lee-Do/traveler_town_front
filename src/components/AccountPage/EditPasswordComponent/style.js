import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
        padding: 30px;
        & > h1 {
            margin: 0;
            cursor: default;
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
`;

export const editBox = css`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const inputBox = css`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const buttonBox = css`
    width: 100%;
    height: 20%;
    padding-right: 75px;
    display: flex;
    justify-content: end;
    align-items: center;

    & > button {
        border: none;
        width: 73.52px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        background-color: black;
        border-radius: 30px;
        color: white;
        margin-left: 10px;
        cursor: pointer;

        &:hover {
            background-color: #000000d4;
        }
    }
`;
