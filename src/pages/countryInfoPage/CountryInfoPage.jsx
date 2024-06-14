/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

function CountryInfoPage(props) {
    const [searchCountry, setSearchCountry] = useState("");


    const handleSearchClick = () => {
        
    };

    const handleSearchOnChange = (e) => {
        setSearchCountry(() => e.target.value);
    };

    return (
        <div css={s.layout}>
            <div css={s.infoLayout}>
                <div css={s.searchBox}>
                    <input
                        type="text"
                        placeholder="어느 나라로 여행을 떠나시나요?"
                        value={searchCountry}
                        onChange={handleSearchOnChange}
                    />
                    <button onClick={handleSearchClick}>
                        <IoSearchOutline />
                    </button>
                </div>
                <div css={s.countryLayout}>
                    <div css={s.imgBox}>
                        {/* <img src={searchCountryData[0]?.flags.png} alt="" /> */}
                    </div>
                    <div css={s.infoBox}>
                        <h1>국가명</h1>
                        <div>
                            <div>
                                <p>인구 : 명</p>
                                <p>지역 : </p>
                                <p>수도 : </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryInfoPage;
