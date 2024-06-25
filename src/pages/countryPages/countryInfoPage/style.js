import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const infoLayout = css`
    width: 1136px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const searchBox = css`
    margin-top: 30px;
    width: 752px;
    height: 48px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);

    & > input {
        width: 693px;
        height: 19px;
        border: none;
        outline: none;
        padding-left: 10px;
        font-size: 16px;
    }

    & > button {
        border: none;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const countryLayout = css`
    width: 100%;
    height: auto;
    margin-top: 50px;
    padding: 40px 0;
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
`;

export const imgBox = css`
    width: 35%;
    padding-left: 50px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
    }
`;

export const infoBox = css`
    width: 45%;

    & > span {
        cursor: default;
    }

    & > div > div > p {
        cursor: default;
    }
`;

export const titleBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;

    & > h1 {
        margin: 0;
        font-size: 32px;
    }

    & > button {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: rgb(22, 68, 113);
        background-color: transparent;
        box-sizing: border-box;
        border: 2px solid rgb(22, 68, 113);
        border-radius: 50px;
        cursor: pointer;
    }
`;

export const touristAttractionLayout = css`
    margin-top: 50px;
    width: 100%;
    height: 100%;
`;

export const restaurantLayout = css`
    margin-top: 50px;
    width: 100%;
    height: 100%;
`;

export const embassyLayout = css`
    margin-top: 50px;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(191, 209, 224);
`;
