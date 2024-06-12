import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const accountBox = css`
    box-sizing: border-box;
    overflow: hidden;
    width: 1136px;
    height: 80vh;
    border-radius: 15px;
    border: 2px solid #dbdbdb;
    display: flex;
`;

export const sideBar = css`
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    background-color: #fafafa;
    border-right: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const profileBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 35%;
    border-bottom: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;

    & > img {
        box-sizing: border-box;
        width: 120px;
        border-radius: 120px;
        border: 1px solid #dbdbdb;
        margin-bottom: 15px;
    }
`;

export const menuBox = css`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > div:nth-of-type(1) {
        //메뉴 박스 css
        font-size: 16px;
        height: 12%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        & > div {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    & > div:nth-of-type(2) {
        //로그아웃 버튼 css
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const mainBox = css`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;