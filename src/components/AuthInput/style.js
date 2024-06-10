import { css } from "@emotion/react";

export const input = css`
    box-sizing: border-box;
    border: 2px solid #c0c0c0;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    padding: 4px 4px 4px 8px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    margin-top: 8px;
    margin-bottom: 16px;

    &:focus {
        border: 2px solid rgb(44, 89, 129);
    }
`;

export const messageBox = (type) => css`
    display: flex;
    justify-content: center;
    padding: ${type === "error" ? "5px 0px" : 0};
    width: 100%;
    color: ${type === "error" ? "red" : "#00921b"};
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-right: 20px;
`;

export const inputIcon = (type) => {
    if (type !== "error") {
        return css`
            position: absolute;
            font-size: 20px;
            transform: translateY(-50%);
            top: 55%;
            right: 15px;
            color: #00921b;
        `;
    }
    return css`
        margin-right: 10px;
        font-size: 20px;
        color: white;
    `;
};
