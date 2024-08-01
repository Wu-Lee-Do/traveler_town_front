import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const bgImgBox = css`
    width: 100%;
    height: 350px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
    }
`;


