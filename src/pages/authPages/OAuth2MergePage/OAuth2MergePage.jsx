/** @jsxImportSource @emotion/react */
import { useMutation } from "react-query";
import AuthInput from "../../../components/AuthInput/AuthInput";
import { useInput } from "../../../hooks/useInput";
import * as s from "./style";
import { oauth2MergeRequest } from "../../../apis/auth/authApi";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuth2MergePage(props) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [username, handleOnChangeUsername] = useInput("username");
    const [password, handleOnChangePassword] = useInput("password");

    const oauth2MergeMutation = useMutation({
        mutationKey: "oauth2MergeMutation",
        mutationFn: oauth2MergeRequest,
        onSuccess: (response) => {
            console.log(response);
            if (response) {
                alert("계정 통합이 완료되었습니다.");
                navigate("/auth/signin");
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleSubmitClick = () => {
        if (username === "" || password === "") {
            alert("정보를 입력해주세요.");
            return;
        } else {
            oauth2MergeMutation.mutate({
                username: username,
                password: password,
                oauth2Name: searchParams.get("id"),
                providerName: searchParams.get("provider"),
            });
        }
    };

    return (
        <div css={s.layout}>
            <div>
                <h1>통합하기</h1>
                <p>Traveler Town에 가입된 정보를 입력해주세요.</p>
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
                    <div css={s.buttonBox}>
                        <button css={s.button} onClick={handleSubmitClick}>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OAuth2MergePage;
