import { css } from "@emotion/react";

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
