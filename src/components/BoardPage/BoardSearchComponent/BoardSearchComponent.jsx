/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";

function BoardSearchComponent({
    searchText,
    setSearchText,
    onKeyDown,
    onClick,
    placeholder,
}) {
    const searchTextOnChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                value={searchText}
                onChange={searchTextOnChange}
                onKeyDown={onKeyDown}
                css={s.searchInput}
            />
            <button onClick={onClick} css={s.searchButton}>
                <IoSearchOutline />
            </button>
        </>
    );
}

export default BoardSearchComponent;
