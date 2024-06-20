/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { googlePlacesDetailRequest } from "../../../apis/country/googleApi";
import StarRatingComponent from "../../../components/CountryInfoPage/StarRatingComponent/StarRatingComponent";

function TouristAttractionInfoPage() {
    const [searchParam, setSearchParam] = useSearchParams();
    const [placeData, setPlaceData] = useState();
    const placesId = searchParam.get("search");
    const googlePlacesDetailQuery = useQuery(
        ["googlePlacesDetailQuery", placesId],
        () => googlePlacesDetailRequest(placesId),
        {
            retry: 2,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                response.json().then((result) => {
                    setPlaceData(result);
                });
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    useEffect(() => {
        console.log(searchParam.get("search"));
        console.log(placeData);
    }, [placeData]);
    return (
        <div css={s.layout}>
            <div css={s.infoLayout}>
                <div css={s.touristAttractionLayout}>
                    <h1>{placeData?.displayName.text}</h1>
                    <div css={s.infoBox}>
                        <StarRatingComponent avrRate={placeData?.rating} />
                    </div>
                    <div css={s.openInfo}>
                        <div css={s.open}>
                            {!!placeData?.regularOpeningHours
                                ? placeData?.regularOpeningHours.openNow ===
                                  true
                                    ? "영업 중"
                                    : "영업시간 종료"
                                : ""}
                        </div>
                        <ul css={s.openInfoDetail}>
                            {!!placeData?.regularOpeningHours
                                ? placeData?.regularOpeningHours.weekdayDescriptions.map(
                                      (data, index) => (
                                          <li key={index}>{data}</li>
                                      )
                                  )
                                : ""}
                        </ul>
                    </div>
                    <div css={s.mainBox}>
                        <div css={s.imgBox}>
                            {/* <img src={countryImgUrl} alt="" /> */}
                        </div>
                        <div css={s.infoBox}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TouristAttractionInfoPage;
