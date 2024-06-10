/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";

function SigninPage() {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate("/signup");
    };

    return (
        <div css={s.layout}>
            <div css={s.loginBox}>
                <div css={s.title}>로그인</div>
                <div css={s.inputBox}>
                    <div>
                        <div>아이디</div>
                        <input type="text" placeholder="아이디" />
                    </div>
                    <div>
                        <div>패스워드</div>
                        <input type="password" placeholder="비밀번호" />
                    </div>
                    <div onClick={handleSignupClick}>회원가입</div>
                </div>
                <div css={s.buttonBox}>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
