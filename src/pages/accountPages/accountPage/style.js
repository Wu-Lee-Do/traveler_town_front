import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
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

export const upButton = (scrollPosition) => css`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #eee;
    position: fixed;
    z-index: 999;
    font-size: 35px;
    right: 200px;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${scrollPosition > 500 ? "1" : "0"};
    transition: 0.3s ease-in-out;
`;
