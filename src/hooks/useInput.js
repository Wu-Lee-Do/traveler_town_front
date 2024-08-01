import { useEffect, useState } from "react";
import { REGEX } from "../constants/regex";

export const useInput = (property) => {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!value) {
            setMessage(() => null);
            return;
        }
        // 특수한 검증 로직을 적용할 경우
        if (property === "password") {
            // 비밀번호 검증 로직
            if (REGEX.password.regexr.test(value)) {
                setMessage({
                    type: "success",
                    text: "",
                });
            } else {
                setMessage({
                    type: "error",
                    text: REGEX.password.text,
                });
            }
        } else {
            // 일반적인 정규표현식 검증
            const regex = REGEX[property]?.regexr;
            const errorMessage = REGEX[property]?.text;

            if (regex) {
                if (regex.test(value)) {
                    setMessage({
                        type: "success",
                        text: "",
                    });
                } else {
                    setMessage({
                        type: "error",
                        text: errorMessage,
                    });
                }
            }
        }
    }, [value]);

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    };

    return [value, handleOnChange, setValue, message, setMessage];
};
