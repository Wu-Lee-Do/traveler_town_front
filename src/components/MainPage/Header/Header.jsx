/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Header() {
    return (
        <div css={s.header}>
            <div css={s.logo}>로고</div>
            <div css={s.menu}>카테고리</div>
            <div css={s.login}>로그인</div>
        </div>
    );
}

export default Header;
