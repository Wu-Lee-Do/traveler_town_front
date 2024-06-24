import { css } from "@emotion/react";

export const layout = css `
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
`;

export const contentBox = css`
    display: flex;
    width: 100%;

    & > div:nth-of-type(1) {
        width: 70%;
    }

    & > div:nth-of-type(2) {
        width: 30%;
    }
`;