/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";

function Main() {
    return (
        <div css={s.main}>
            <h1 css={s.mainTitle}>여행자들의 쉼터</h1>
            <div css={s.searchBox}>
                <IoSearchOutline />
                <input type="text" />
            </div>
        </div>
    );
}

export default Main;
