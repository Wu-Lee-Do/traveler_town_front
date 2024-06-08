/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SigninPage() {
    return (
        <div css={s.layout}>
            <div css={s.loginBox}>
                <div css={s.title}>로그인</div>
                <div css={s.inputBox}>
                    <div>
                        <div>이메일 주소</div>
                        <input type="text" placeholder="이메일" />
                    </div>
                    <div>
                        <div>패스워드</div>
                        <input type="text" placeholder="비밀번호" />
                    </div>
                    <div>회원가입</div>
                </div>
                <div css={s.buttonBox}>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
