import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    /* height: 100%; */
    padding-top: 80px;
    padding-bottom: 80px;

    background-color: #fafafa;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const infoLayout = css`
    width: 1136px;
    /* height: 800px; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const searchBox = css`
    box-sizing: border-box;
    margin-top: 30px;
    width: 752px;
    height: 48px;
    border: 2px solid #dbdbdb;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: white;

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
    padding-top: 50px;
    display: flex;
    justify-content: space-around;
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
        /* box-shadow: 0px 0px 10px #444444;
        border: 1px solid #dbdbdb; */
    }
`;

export const infoBox = css`
    width: 45%;

    & > h1 {
        margin: 0;
        font-size: 32px;
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
