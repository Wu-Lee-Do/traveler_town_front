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

export const touristAttractionLayout = css`
    width: 100%;
    height: auto;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const mainBox = css``;

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
`;

export const openInfo = css`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
`;

export const open = (open) => css`
    color: ${open ? "green" : "red"};
`;

export const openInfoDetail = css`
    padding-left: 20px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
`;
