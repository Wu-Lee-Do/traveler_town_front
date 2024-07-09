/** @jsxImportSource @emotion/react */
import { MdError } from "react-icons/md";
import * as s from "./style";
import { FaCheckCircle } from "react-icons/fa";

function AuthInput({ type, value, placeholder, onChange, message, maxLength }) {
    return (
        <>
            <input
                css={s.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
            />
            {!!message && (
                <div css={s.messageBox(message.type)}>
                    <div css={s.inputIcon(message.type)}>
                        {message.type === "error" ? (
                            <MdError />
                        ) : (
                            <FaCheckCircle />
                        )}
                    </div>
                    {message.text}
                </div>
            )}
        </>
    );
}

export default AuthInput;
