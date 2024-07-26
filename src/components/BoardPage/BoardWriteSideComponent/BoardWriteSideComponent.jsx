/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { searchCountryRequest } from "../../../apis/country/countryApi";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function BoardWriteSideComponent({ country }) {
    const [countryInfo, setCountryInfo] = useState();
    const [countryImg, setCountryImg] = useState();
    const getCountryInfoQuery = useQuery(
        ["getCountryInfoQuery", country?.countryNameKor],
        async () => searchCountryRequest(country?.countryNameKor),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setCountryInfo(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    useEffect(() => {
        const storage = getStorage();
        getDownloadURL(ref(storage, `country/${country?.countryCode}.gif`))
            .then((url) => {
                setCountryImg(url);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [country]);

    return countryInfo ? (
        <div css={s.layout}>
            <div css={s.box}>
                <h1 css={s.countryName}>{countryInfo?.countryNameKor}</h1>
                <div css={s.imgBox}>
                    <img src={countryImg} alt="" />
                </div>
                <div>
                    {countryInfo?.capital === "(NULL)" ? (
                        ""
                    ) : (
                        <p>수도 : {countryInfo?.capital}</p>
                    )}
                    {countryInfo?.language === "(NULL)" ? (
                        ""
                    ) : (
                        <p>언어 : {countryInfo?.language}</p>
                    )}

                    <p>
                        인구 :{" "}
                        {countryInfo?.population?.toLocaleString("ko-KR")}명
                    </p>
                    {countryInfo?.climate === "(NULL)" ? (
                        ""
                    ) : (
                        <p>기후 : {countryInfo?.climate}</p>
                    )}
                    <p>
                        면적 : {countryInfo?.area?.toLocaleString("ko-KR")}
                        km²
                        {countryInfo?.areaExp === "(NULL)"
                            ? ""
                            : countryInfo?.areaExp}
                    </p>
                    {countryInfo?.people === "(NULL)" ? (
                        ""
                    ) : (
                        <p>민족 : {countryInfo?.people}</p>
                    )}
                    {countryInfo?.religion === "(NULL)" ? (
                        ""
                    ) : (
                        <p>종교 : {countryInfo?.religion}</p>
                    )}
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}

export default BoardWriteSideComponent;
