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
    justify-content: space-between;
`;

export const infoBox = css`
    box-sizing: border-box;
    width: 25%;
    height: auto;
    /* border: 2px solid #dbdbdb; */
    border-radius: 15px;
    background-color: white;
    padding-left: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
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

export const imgLayout = css`
    width: 70%;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
`;

export const imgBox = css`
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
