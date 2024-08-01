/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSearchParams } from "react-router-dom";

function OAuth2Page(props) {
    const [searchParams] = useSearchParams();
    const handleSignupClick = () => {
        window.location.replace(
            `/auth/signup?id=${searchParams.get("id")}&provider=Naver`
        );
    };
    return (
        <div css={s.layout}>
            <div>
                <div css={s.selectLayout}>
                    <h1>반가워요 {searchParams.get("name").slice(-2)}님!</h1>
                    <div>
                        <div css={s.optionBox}>
                            <div css={s.optionText}>
                                <h2>계정 통합하기</h2>
                                <p>기존 Traveler Town 회원이신가요?</p>
                            </div>
                            <h2>통합하기</h2>
                        </div>
                        <div css={s.optionBox} onClick={handleSignupClick}>
                            <div css={s.optionText}>
                                <h2>새로 가입하기</h2>
                                <p>회원이 없으신가요? 새로 가입해보아요!</p>
                            </div>
                            <h2>가입하기</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OAuth2Page;
