/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SignupPage() {
    return (
        <div css={s.layout}>
            <div css={s.signinBox}>
                <div css={s.title}>회원가입</div>
                <div css={s.inputBox}>
                    <div>
                        <div>이메일 주소</div>
                        <input type="text" placeholder="이메일" />
                    </div>
                    <div>
                        <div>닉네임</div>
                        <input type="text" placeholder="닉네임" />
                    </div>
                    <div>
                        <div>패스워드</div>
                        <input type="password" placeholder="비밀번호" />
                    </div>
                    <div>
                        <div>패스워드 확인</div>
                        <input type="password" placeholder="비밀번호 확인" />
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
