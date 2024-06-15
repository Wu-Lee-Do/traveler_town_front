import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        width: 90%;
        /* padding-left: 60px; */
    }
`;

export const attractionBox = css`
    width: 90%;
    /* height: 100%; */
    background-color: #dbdbdb;
`;

export const box = css`
    width: 300px;
    height: 200px;
    border: 1px solid black;
`;
