/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";

function BoardSearchComponent({setSearchText, onKeyDown, onClick, placeholder}) {

    const boardTitleOnChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder={placeholder} onChange={boardTitleOnChange} onKeyDown={onKeyDown}/>
            <button onClick={onClick}>
                <IoSearchOutline />
            </button>
        </>
    )
}

export default BoardSearchComponent;