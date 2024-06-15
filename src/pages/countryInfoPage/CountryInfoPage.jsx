/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchCountryRequest } from "../../apis/country/countryApi";
import { useMutation } from "react-query";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function CountryInfoPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchCountryData, setSearchCountryData] = useState();
    const [searchCountry, setSearchCountry] = useState("");
    const [countryImgUrl, setCountryImgUrl] = useState("");

    const searchCountryMutation = useMutation({
        mutationKey: "searchCountryMutation",
        mutationFn: searchCountryRequest,
        onSuccess: (response) => {
            setSearchCountryData(() => response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    console.log(searchCountryData);

    useEffect(() => {
        searchCountryMutation.mutate(searchParams.get("search"));
    }, []);

    const storage = getStorage();
    getDownloadURL(
        ref(storage, `country/${searchCountryData?.countryCode}.gif`)
    )
        .then((url) => {
            setCountryImgUrl(url);
        })
        .catch((error) => {
            console.log(error);
        });

    const handleSearchClick = () => {
        window.location.replace(`/country?search=${searchCountry}`);
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
                        <img src={countryImgUrl} alt="" />
                    </div>
                    <div css={s.infoBox}>
                        <h1>{searchCountryData?.countryNameKor}</h1>
                        <span>{searchCountryData?.countryNameEng}</span>
                        <div>
                            <div>
                                {searchCountryData?.capital === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>수도 : {searchCountryData?.capital}</p>
                                )}
                                {searchCountryData?.language === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>언어 : {searchCountryData?.language}</p>
                                )}

                                <p>
                                    인구 :{" "}
                                    {searchCountryData?.population.toLocaleString(
                                        "ko-KR"
                                    )}
                                    명
                                </p>
                                {searchCountryData?.climate === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>기후 : {searchCountryData?.climate}</p>
                                )}
                                <p>
                                    면적 :{" "}
                                    {searchCountryData?.area.toLocaleString(
                                        "ko-KR"
                                    )}
                                    km²
                                    {searchCountryData?.areaExp === "(NULL)"
                                        ? ""
                                        : searchCountryData?.areaExp}
                                </p>
                                {searchCountryData?.people === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>민족 : {searchCountryData?.people}</p>
                                )}
                                {searchCountryData?.religion === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>종교 : {searchCountryData?.religion}</p>
                                )}
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
