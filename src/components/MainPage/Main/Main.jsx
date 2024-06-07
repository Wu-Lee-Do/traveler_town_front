/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";
import banner1 from "../../../assets/banner1.jpg";

function Main() {
    return (
        <div css={s.main}>
            <h1 css={s.mainTitle}>여행자들을 위한 쉼터</h1>
            <div css={s.searchBox}>
                <IoSearchOutline />
                <input type="text" />
            </div>
            <div css={s.bannerBox}>
                <div css={s.banner}>
                    <img src={banner1} alt="" />
                    <div css={s.bannerTitle}>
                        <h1>지금 실시간으로 여행 동행을 찾아봐요</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
