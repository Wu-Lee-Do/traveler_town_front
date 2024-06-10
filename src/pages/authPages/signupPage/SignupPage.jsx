/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import * as s from "./style";
import AuthInput from "../../../components/AuthInput/AuthInput";

function SignupPage() {
    const [username, usernameChange, usernameMessage] = useInput("username");
    const [password, passwordChange, passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [nickname, nicknameChange, nicknameMessage] = useInput("nickname");
    const [email, emailChange, emailMessage] = useInput("email");
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
                    <button>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
