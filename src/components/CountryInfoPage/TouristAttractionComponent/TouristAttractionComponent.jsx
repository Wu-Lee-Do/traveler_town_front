/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

function TouristAttractionComponent() {
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
                    <SwiperSlide>
                        <div css={s.box}>1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.box}>2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.box}>3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.box}>4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.box}>5</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.box}>6</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default TouristAttractionComponent;
