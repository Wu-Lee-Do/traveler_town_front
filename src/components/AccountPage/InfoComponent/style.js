import { css } from "@emotion/react";

export const infoLayout = css`
    width: 90%;
    height: 90%;

    & > h1 {
        font-size: 20px;
    }
`;

export const basicInfoBox = css`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #fafafa;
`;

export const profileBox = css`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;

    & > img {
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        border: 1px solid #dbdbdb;
        margin-bottom: 15px;
    }
`;

export const infoBox = css`
    width: 65%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & > div {
        width: 100%;
        font-size: 16px;
        display: flex;
        justify-content: space-between;

        & > button {
            border: none;
            background-color: transparent;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                font-weight: 600;
            }
        }
    }

    & > div:nth-of-type(1) {
        height: 40%;
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
    }
`;

export const mailCheck = css`
    color: green;
`;

export const additionalInfoBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: #fafafa;

    & > div {
        width: 90%;
        height: 50%;

        & > div:nth-of-type(1) {
            border-bottom: 1px solid #dbdbdb;
            box-sizing: border-box;
        }

        & > div {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: end;
        align-items: center;

        & > button {
            border: none;
            background-color: transparent;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                font-weight: 600;
            }
        }
    }
`;
