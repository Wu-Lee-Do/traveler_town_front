import { css } from "@emotion/react";

export const inputLayout = css`
    position: relative;
    width: 100%;
    height: 90px;
`;

export const input = css`
    box-sizing: border-box;
    border: 2px solid #c0c0c0;
    border-radius: 4px;
    width: 100%;
    height: 44px;
    padding: 4px 4px 4px 8px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    margin-top: 8px;

    &:focus {
        border: 2px solid rgb(44, 89, 129);
    }
`;

export const messageBox = (type) => css`
    display: flex;
    padding: ${type === "error" ? "5px 0px" : 0};
    width: 100%;
    color: ${type === "error" ? "red" : "#00921b"};
    font-size: 13px;
    font-weight: 600;
`;

export const inputIcon = (type) => {
    if (type !== "error") {
        return css`
            position: absolute;
            right: 15px;
            top: 22px;
            font-size: 16px;
            color: #00921b;
        `;
    }
    return css`
        margin-right: 5px;
        font-size: 16px;
        color: red;
    `;
};
