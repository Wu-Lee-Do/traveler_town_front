/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { useMutation } from "react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { googleImgSearchRequest } from "../../../apis/country/googleApi";

// 검색 키워드 국가 영문명 추가
// 관광지 5개 따로 검색 구현
// 검색된 이미지 없을시 빈 이미지 구현

function TouristAttractionComponent({ touristAttractionData }) {
    const [imgUrl, setImgUrl] = useState();

    const googleImgSearchMutation = useMutation({
        mutationKey: "googleImgSearchMutation",
        mutationFn: googleImgSearchRequest,
        onSuccess: (response) => {
            response.json().then((result) => {
                console.log(result.photoUri);
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleSearchClick = () => {
        googleImgSearchMutation.mutate(touristAttractionData[0].photos[0].name);
    };

    console.log(touristAttractionData);

    return (
        <div css={s.layout}>
            <h1>관광지</h1>
            <button onClick={handleSearchClick}>검색</button>
            <div css={s.attractionBox}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {touristAttractionData?.map((data) => (
                        <SwiperSlide>
                            <div css={s.box}>{data?.displayName.text}</div>
                            <div>
                                <img src={imgUrl} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TouristAttractionComponent;
