/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import {
    googleImgSearchRequest,
    googlePlacesDetailRequest,
} from "../../../apis/country/googleApi";
import { useQuery } from "react-query";
import StarRatingComponent from "../../../components/CountryInfoPage/StarRatingComponent/StarRatingComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import GoogleMapsComponent from "../../../components/CountryInfoPage/googleMapComponent/GoogleMapsComponent";
import ReviewComponent from "../../../components/CountryInfoPage/reviewComponent/ReviewComponent";

function RestaurantInfoPage() {
    const [searchParam, setSearchParam] = useSearchParams();
    const [placeData, setPlaceData] = useState();
    const [imgUrls, setImgUrls] = useState([]);
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

    const fetchImages = async () => {
        const allImagePromises = placeData.photos.slice(0, 10).map((photo) =>
            googleImgSearchRequest(photo.name)
                .then((response) => response.json())
                .then((result) => result.photoUri || "defaultImage.jpg")
                .catch(() => "defaultImage.jpg")
        );

        const results = await Promise.all(allImagePromises);
        setImgUrls(results);
    };

    useEffect(() => {
        if (placeData && placeData.photos && placeData.photos.length > 0) {
            fetchImages();
        }
    }, [placeData]);

    return (
        <div css={s.layout}>
            <div css={s.infoLayout}>
                <div css={s.restaurantLayout}>
                    <div css={s.infoBox}>
                        <h1>{placeData?.displayName.text}</h1>
                        <div>
                            <StarRatingComponent avrRate={placeData?.rating} />
                        </div>
                        <div css={s.openInfo}>
                            {!!placeData?.regularOpeningHours ? (
                                <div
                                    css={s.open(
                                        placeData?.regularOpeningHours.openNow
                                    )}
                                >
                                    {!!placeData?.regularOpeningHours
                                        ? placeData?.regularOpeningHours
                                              .openNow === true
                                            ? "영업 중"
                                            : "영업시간 종료"
                                        : ""}
                                </div>
                            ) : (
                                ""
                            )}
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
                    </div>
                    <div css={s.imgLayout}>
                        <Swiper
                            slidesPerView={1}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            loop={true}
                        >
                            {imgUrls.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div css={s.imgBox}>
                                        <img src={img} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div css={s.detailInfoLayout}>
                    <div css={s.detailInfoBox}>
                        {!!placeData?.editorialSummary ? (
                            <div>
                                <h2>지역설명</h2>
                                <div css={s.detailInfoText}>
                                    {placeData?.editorialSummary.text}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {!!placeData?.formattedAddress ? (
                            <div>
                                <h2>주소</h2>
                                <div css={s.detailInfoText}>
                                    {placeData?.formattedAddress}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {!!placeData?.internationalPhoneNumber ? (
                            <div>
                                <h2>전화번호</h2>
                                <div css={s.detailInfoText}>
                                    {placeData?.internationalPhoneNumber}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {!!placeData?.websiteUri ? (
                            <h3>
                                <a
                                    css={s.a}
                                    target="_blank"
                                    href={placeData?.websiteUri}
                                >
                                    홈페이지
                                </a>
                            </h3>
                        ) : (
                            ""
                        )}
                    </div>
                    <div css={s.mapBox}>
                        <GoogleMapsComponent
                            lat={placeData?.location.latitude}
                            lng={placeData?.location.longitude}
                        />
                    </div>
                </div>
                <ReviewComponent reviews={placeData?.reviews} />
            </div>
        </div>
    );
}

export default RestaurantInfoPage;
