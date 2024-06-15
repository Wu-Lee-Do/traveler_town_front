import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        width: 90%;
    }
`;

export const attractionBox = css`
    width: 90%;
    /* background-color: #dbdbdb; */
`;

export const box = css`
    box-sizing: border-box;
    width: 300px;
    height: 200px;
    border: 2px solid #dbdbdb;
    border-radius: 15px;
`;
