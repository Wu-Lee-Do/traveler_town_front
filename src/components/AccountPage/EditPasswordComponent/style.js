import { css } from "@emotion/react";

export const layout = css`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h1 {
        font-size: 20px;
    }
`;

export const editBox = css`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
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
        background-color: transparent;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            font-weight: 600;
        }
    }
`;
