/** @jsxImportSource @emotion/react */
import * as s from "./style";

import AuthInput from "../../AuthInput/AuthInput";
import { useInput } from "../../../hooks/useInput";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { editPasswordRequest } from "../../../apis/account/accountApi";
import { instance } from "../../../apis/utils/instance";

function EditPasswordComponent() {
    const queryClient = useQueryClient();
    const [
        oldPassword,
        oldPasswordChange,
        setOldPassword,
        oldPasswordMessage,
        setOldPasswordMessage,
    ] = useInput("oldPassword");
    const [
        newPassword,
        newPasswordChange,
        setNewPassword,
        newPasswordMessage,
        setNewPasswordMessage,
    ] = useInput("newPassword");
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

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("비밀번호가 변경 되었습니다.");
            localStorage.removeItem("AccessToken");
            instance.interceptors.request.use((config) => {
                config.headers.Authorization = null;
                return config;
            });
            queryClient.refetchQueries("principalQuery");
            window.location.href = "/";
        },
        onError: (error) => {
            if (error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setOldPasswordMessage(null);
                setNewPasswordMessage(null);
                for (let [k, v] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v,
                    };
                    if (k === "oldPassword") {
                        setOldPasswordMessage(() => {
                            return setOldPasswordMessage(() => message);
                        });
                    }
                    if (k === "newPassword") {
                        setNewPasswordMessage(() => {
                            return setNewPasswordMessage(() => message);
                        });
                    }
                }
            }
        },
    });

    const handleEditPasswordSaveClick = () => {
        editPasswordMutation.mutate({
            oldPassword: oldPassword,
            newPassword: newPassword,
            newPasswordCheck: checkNewPassword,
        });
    };

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
                    <button onClick={handleEditPasswordSaveClick}>변경</button>
                </div>
            </div>
        </div>
    );
}

export default EditPasswordComponent;
