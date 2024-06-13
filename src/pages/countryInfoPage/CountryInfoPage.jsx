/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { useRecoilState } from "recoil";
import { searchCountryState } from "../../atoms/searchCountryAtom";

function CountryInfoPage(props) {
    const [searchCountry, setSearchCountry] =
        useRecoilState(searchCountryState);
    console.log(searchCountry);
    return <div></div>;
}

export default CountryInfoPage;
