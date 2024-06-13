/** @jsxImportSource @emotion/react */
import * as s from "./style";

import AuthInput from "../../AuthInput/AuthInput";
import { useInput } from "../../../hooks/useInput";
import { useEffect, useState } from "react";

function EditPasswordComponent() {
    const [oldPassword, oldPasswordChange, oldPasswordMessage] =
        useInput("oldPassword");
    const [newPassword, newPasswordChange, newPasswordMessage] =
        useInput("newPassword");
    const [checkNewPassword, checkNewPasswordChange] =
        useInput("checkPassword");
    const [checkNewPasswordMessage, setCheckNewPasswordMessage] =
        useState(null);

    useEffect(() => {
        if (!checkNewPassword || !newPassword) {
            setCheckNewPasswordMessage(() => null);
            return;
        }

        if (checkNewPassword === newPassword) {
            setCheckNewPasswordMessage(() => {
                return {
                    type: "success",
                    text: "",
                };
            });
        } else {
            setCheckNewPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다.",
                };
            });
        }
    }, [checkNewPassword, newPassword]);

    return (
        <div css={s.layout}>
            <h1>비밀번호 변경</h1>
            <div css={s.editBox}>
                <div css={s.inputBox}>
                    <div>현재 비밀번호</div>
                    <AuthInput
                        type={"password"}
                        name={"oldPassword"}
                        placeholder={"현재 비밀번호"}
                        value={oldPassword}
                        onChange={oldPasswordChange}
                        message={oldPasswordMessage}
                    />
                    <div>새로운 비밀번호</div>
                    <AuthInput
                        type={"password"}
                        name={"newPassword"}
                        placeholder={"새로운 비밀번호"}
                        value={newPassword}
                        onChange={newPasswordChange}
                        message={newPasswordMessage}
                    />
                    <div>새로운 비밀번호 확인</div>
                    <AuthInput
                        type={"password"}
                        name={"checkNewPassword"}
                        placeholder={"새로운 비밀번호 확인"}
                        value={checkNewPassword}
                        onChange={checkNewPasswordChange}
                        message={checkNewPasswordMessage}
                    />
                </div>
                <div css={s.buttonBox}>
                    <button>변경</button>
                </div>
            </div>
        </div>
    );
}

export default EditPasswordComponent;
