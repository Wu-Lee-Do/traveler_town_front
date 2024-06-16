/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { useMutation } from "react-query";
import { unsplashApiRequest } from "../../../apis/country/unsplashApi";
import { useState } from "react";

// 검색 키워드 국가 영문명 추가
// 관광지 5개 따로 검색 구현
// 검색된 이미지 없을시 빈 이미지 구현

function TouristAttractionComponent({ touristAttractionData }) {
    const [imgUrl, setImgUrl] = useState();
    const unsplashApiMutation = useMutation({
        mutationKey: "unsplashApiMutation",
        mutationFn: unsplashApiRequest,
        onSuccess: (response) => {
            response.json().then((result) => {
                console.log(result);
                setImgUrl(result.results[0]?.urls.regular);
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });
    const handleSearchClick = () => {
        unsplashApiMutation.mutate(touristAttractionData[0]?.displayName.text);
    };

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
