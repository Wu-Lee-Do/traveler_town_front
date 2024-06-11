/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import AuthInput from "../../../components/AuthInput/AuthInput";
import { useInput } from "../../../hooks/useInput";
import { useQueryClient } from "react-query";
import { signinRequest } from "../../../apis/auth/authApi";

function SigninPage() {
    const navigate = useNavigate();
    const [username, handleOnChangeUsername] = useInput("username");
    const [password, handleOnChangePassword] = useInput("password");
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    console.log(principalData);

    const handleSignupClick = () => {
        navigate("/signup");
    };

    const handleSigninClick = () => {
        signinRequest({
            username,
            password,
        })
            .then((response) => {
                const accessToken = response.data;
                localStorage.setItem("AccessToken", accessToken);
                navigate("/");
            })
            .catch((error) => {
                alert(error.response.data);
            });
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
                        />
                    </div>
                    <div onClick={handleSignupClick}>회원가입</div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSigninClick}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
