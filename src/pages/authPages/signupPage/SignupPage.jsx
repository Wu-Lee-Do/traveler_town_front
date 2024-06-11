/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import * as s from "./style";
import AuthInput from "../../../components/AuthInput/AuthInput";
import { signupRequest } from "../../../apis/auth/authApi";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();
    const [
        username,
        usernameChange,
        setUsername,
        usernameMessage,
        setUsernameMessage,
    ] = useInput("username");
    const [password, passwordChange, passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [
        nickname,
        nicknameChange,
        setNickname,
        nicknameMessage,
        setNicknameMessage,
    ] = useInput("nickname");
    const [email, emailChange, setEmail, emailMessage, setEmailMessage] =
        useInput("email");
    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);

    useEffect(() => {
        if (!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if (checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: "",
                };
            });
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다.",
                };
            });
        }
    }, [checkPassword, password]);

    const handleSignupSubmit = () => {
        if (
            username === "" ||
            password === "" ||
            nickname === "" ||
            email === ""
        ) {
            alert("정보를 입력해주세요.");
            return;
        }
        if (password !== checkPassword) {
            alert("비밀번호가 일치하지 않습니다.");
        }
        signupRequest({
            username,
            password,
            nickname,
            email,
        })
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    alert("회원가입이 완료되었습니다.");
                    navigate("/auth/signin");
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    if (error.response.data.hasOwnProperty("username")) {
                        console.log(error.response.data.username);
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: error.response.data.username,
                            };
                        });
                    }
                    if (error.response.data.hasOwnProperty("nickname")) {
                        console.log(error.response.data.nickname);
                        setNicknameMessage(() => {
                            return {
                                type: "error",
                                text: error.response.data.nickname,
                            };
                        });
                    }
                    if (error.response.data.hasOwnProperty("email")) {
                        console.log(error.response.data.email);
                        setEmailMessage(() => {
                            return {
                                type: "error",
                                text: error.response.data.email,
                            };
                        });
                    }
                }
            });
    };

    console.log(emailMessage);

    return (
        <div css={s.layout}>
            <div css={s.signinBox}>
                <div css={s.title}>회원가입</div>
                <div css={s.inputBox}>
                    <div>
                        <div>아이디</div>
                        <AuthInput
                            type={"text"}
                            name={"username"}
                            placeholder={"아이디"}
                            value={username}
                            onChange={usernameChange}
                            message={usernameMessage}
                        />
                    </div>
                    <div>
                        <div>닉네임</div>
                        <AuthInput
                            type={"text"}
                            name={"nickname"}
                            placeholder={"닉네임"}
                            value={nickname}
                            onChange={nicknameChange}
                            message={nicknameMessage}
                        />
                    </div>
                    <div>
                        <div>패스워드</div>
                        <AuthInput
                            type={"password"}
                            name={"password"}
                            placeholder={"비밀번호"}
                            value={password}
                            onChange={passwordChange}
                            message={passwordMessage}
                        />
                    </div>
                    <div>
                        <div>패스워드 확인</div>
                        <AuthInput
                            type={"password"}
                            name={"checkPassword"}
                            placeholder={"비밀번호 확인"}
                            value={checkPassword}
                            onChange={checkPasswordChange}
                            message={checkPasswordMessage}
                        />
                    </div>
                    <div>
                        <div>이메일</div>
                        <AuthInput
                            type={"text"}
                            name={"email"}
                            placeholder={"이메일"}
                            value={email}
                            onChange={emailChange}
                            message={emailMessage}
                        />
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSignupSubmit}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
