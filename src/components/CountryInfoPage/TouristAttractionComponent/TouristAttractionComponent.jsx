/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import { googleImgSearchRequest } from "../../../apis/country/googleApi";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";

// 관광지 디테일 페이지 만들기
// 이름 별점 주소 평점 사진 여러개

function TouristAttractionComponent({ touristAttractionData }) {
    const [imgUrl, setImgUrl] = useState([]);
    const fetchImages = async () => {
        const promises = touristAttractionData
            .slice(0, 10)
            .map((attraction, index) =>
                googleImgSearchRequest(attraction?.photos[0].name)
                    .then((response) => response.json())
                    .then((result) => result?.photoUri || "defaultImage.jpg")
                    .catch(() => "defaultImage.jpg")
            );

        const results = await Promise.all(promises);
        setImgUrl(results);
    };

    console.log(touristAttractionData);

    useEffect(() => {
        if (touristAttractionData && touristAttractionData.length > 0) {
            fetchImages();
        }
    }, [touristAttractionData]);

    return (
        <div css={s.layout}>
            <h1>관광지</h1>
            <div css={s.attractionBox}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {touristAttractionData?.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div css={s.box}>
                                <div css={s.imgBox}>
                                    <img src={imgUrl[index]} alt="" />
                                </div>
                                <div css={s.displayName}>
                                    {data?.displayName.text}
                                    <StarRatingComponent
                                        avrRate={data?.rating}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TouristAttractionComponent;
