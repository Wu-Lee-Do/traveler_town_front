import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        width: 100%;
    }
`;

export const attractionBox = css`
    width: 100%;
`;

export const box = css`
    box-sizing: border-box;
    width: 270px;
    height: 350px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const imgBox = css`
    width: 270px;
    height: 270px;

    & > img {
        width: 100%;
        border-radius: 15px;
    }
`;

export const displayName = css`
    width: 100%;
    text-align: left;
    padding-left: 20px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
`;
