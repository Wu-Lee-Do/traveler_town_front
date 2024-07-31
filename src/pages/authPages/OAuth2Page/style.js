import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 90%;
    padding-top: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: 1136px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const selectLayout = css`
    width: 750px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const optionBox = css`
    width: 350px;
    height: 300px;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: 0.1s all ease-in-out;
    cursor: pointer;

    & > h2 {
        margin-bottom: 30px;
    }

    &:hover {
        scale: calc(1.05);
    }
`;

export const optionText = css`
    & > h2 {
        margin: 0;
        padding: 0;
        margin-top: 40px;
    }
`;
