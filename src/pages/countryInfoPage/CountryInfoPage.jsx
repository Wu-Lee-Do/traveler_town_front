/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { useRecoilState } from "recoil";
import { searchCountryState } from "../../atoms/searchCountryAtom";
import { IoSearchOutline } from "react-icons/io5";
import { allCountryState } from "../../atoms/allCountryAtom";
import { useState } from "react";

function CountryInfoPage(props) {
    const [searchCountry, setSearchCountry] = useState("");
    const [searchCountryData, setSearchCountryData] =
        useRecoilState(searchCountryState);
    const [allCountryData, setAllCountryData] = useRecoilState(allCountryState);
    console.log(searchCountryData);

    const handleSearchClick = () => {
        setSearchCountryData(
            allCountryData.filter(
                (country) => country.translations.kor.common === searchCountry
            )
        );
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
                        <img src={searchCountryData[0]?.flags.png} alt="" />
                    </div>
                    <div css={s.infoBox}>
                        <h1>
                            {searchCountryData[0]?.translations.kor.official}
                        </h1>
                        <div>
                            <div>
                                <p>
                                    인구 : {searchCountryData[0]?.population}명
                                </p>
                                <p>지역 : {searchCountryData[0]?.region}</p>
                                <p>수도 : {searchCountryData[0]?.capital}</p>
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
