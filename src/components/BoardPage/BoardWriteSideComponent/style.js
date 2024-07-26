import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    border-radius: 15px;
`;

export const box = css`
    padding: 15px;
`;

export const countryName = css`
    padding: 0 0 10px 0;
    margin: 0;
`;

export const imgBox = css`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    & > img {
        width: 80%;
    }
`;
