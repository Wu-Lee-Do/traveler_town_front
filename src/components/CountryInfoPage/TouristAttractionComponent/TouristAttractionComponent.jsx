/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { useMutation } from "react-query";
import { naverApiRequest } from "../../../apis/country/naverApi";

function TouristAttractionComponent({ touristAttractionData }) {
    const naverApiMutation = useMutation({
        mutationKey: "naverApiMutation",
        mutationFn: naverApiRequest,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleSearchClick = () => {
        naverApiMutation.mutate(touristAttractionData[0]?.displayName.text);
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TouristAttractionComponent;
