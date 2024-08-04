/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";
import AuthInput from "../../../components/AuthInput/AuthInput";
import { useInput } from "../../../hooks/useInput";
import { useQueryClient } from "react-query";
import { signinRequest } from "../../../apis/auth/authApi";
import getServerAddress from "../../../constants/serverAddress";
import { useRecoilState } from "recoil";
import { previousPathnameState } from "../../../atoms/previousPathnameAtom";

function SigninPage() {
    const navigate = useNavigate();
    const [username, handleOnChangeUsername] = useInput("username");
    const [password, handleOnChangePassword] = useInput("password");
    const [pathnameState, setPathnameState] = useRecoilState(
        previousPathnameState
    );

    const handleSignupClick = () => {
        navigate("/auth/signup");
    };
    console.log(pathnameState);
    const handleSigninClick = () => {
        signinRequest({
            username,
            password,
        })
            .then((response) => {
                const accessToken = response.data;
                localStorage.setItem("AccessToken", accessToken);
                window.location.replace(pathnameState);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSigninClick();
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.loginBox}>
                <div css={s.title}>로그인</div>
                <div css={s.inputBox}>
                    <div>
                        <div>아이디</div>
                        <AuthInput
                            type="text"
                            name="username"
                            placeholder={"아이디를 입력하세요"}
                            value={username}
                            onChange={handleOnChangeUsername}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div>
                        <div>패스워드</div>
                        <AuthInput
                            type="password"
                            name="password"
                            placeholder={"비밀번호를 입력하세요"}
                            value={password}
                            onChange={handleOnChangePassword}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div onClick={handleSignupClick}>회원가입</div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSigninClick} css={s.button("login")}>
                        로그인
                    </button>
                </div>
                <div css={s.buttonBox}>
                    <a
                        href={`${getServerAddress()}/oauth2/authorization/naver`}
                    >
                        <button css={s.button("naver")}>네이버 로그인</button>
                    </a>
                </div>
                <div css={s.buttonBox}>
                    <a
                        href={`${getServerAddress()}/oauth2/authorization/kakao`}
                    >
                        <button css={s.button("kakao")}>카카오 로그인</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
