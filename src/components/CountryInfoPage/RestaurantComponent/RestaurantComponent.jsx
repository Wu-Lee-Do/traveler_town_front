/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import * as s from "./style";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";
import { useEffect, useState } from "react";
import { googleImgSearchRequest } from "../../../apis/country/googleApi";

function RestaurantComponent({ restaurantData }) {
    const [imgUrl, setImgUrl] = useState([]);

    const fetchImages = async () => {
        const promises = restaurantData.slice(0, 10).map((attraction, index) =>
            googleImgSearchRequest(attraction?.photos[0].name)
                .then((response) => response.json())
                .then((result) => result?.photoUri || "defaultImage.jpg")
                .catch(() => "defaultImage.jpg")
        );

        const results = await Promise.all(promises);
        setImgUrl(results);
    };

    console.log(restaurantData);

    useEffect(() => {
        if (restaurantData && restaurantData.length > 0) {
            fetchImages();
        }
    }, [restaurantData]);

    return (
        <div css={s.layout}>
            <h1>음식점</h1>
            <div css={s.attractionBox}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {restaurantData?.map((data, index) => (
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

export default RestaurantComponent;
