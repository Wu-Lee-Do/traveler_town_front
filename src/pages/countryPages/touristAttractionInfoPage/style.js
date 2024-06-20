import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;

    background-color: #fafafa;

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
    border-radius: 15px;
    background-color: white;
    padding-left: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);

    & > h1 {
        margin-bottom: 10px;
    }
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
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    line-height: 200%;
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

export const detailInfoLayout = css`
    width: 100%;
    background-color: white;
    margin-top: 60px;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    padding-left: 20px;
    padding-bottom: 30px;
`;

export const detailInfoBox = css`
    width: 45%;
`;

export const detailInfoText = css`
    font-size: 18px;
    font-weight: 600;
    color: #333333;
`;

export const a = css`
    text-decoration: underline;
    color: black;
`;

export const mapBox = css``;

// 리뷰 구현
// 지도 api 구현
