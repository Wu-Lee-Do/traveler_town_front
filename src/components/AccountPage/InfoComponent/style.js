import { css } from "@emotion/react";

export const infoLayout = css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
        padding: 30px;
        width: 50%;

        & > h1 {
            margin: 0;
            cursor: default;
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
`;

export const basicInfoBox = css`
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const infoBox = css`
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: default;

    & > div {
        font-size: 16px;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > button {
            background-color: black;
            border: none;
            border-radius: 5px;
            padding: 5px 7px 5px 7px;
            font-size: 12px;
            color: white;
            margin-left: 5px;
            cursor: pointer;

            &:hover {
                background-color: #000000d4;
            }
        }
    }
`;

export const mailCheck = css`
    color: green;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const additionalInfoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: default;

    & > div {
        width: 100%;
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
        margin-top: 30px;

        & > button {
            border: none;
            width: 73.52px;
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 700;
            background-color: black;
            border-radius: 30px;
            color: white;
            margin-left: 10px;
            cursor: pointer;

            &:hover {
                background-color: #000000d4;
            }
        }
    }
`;
