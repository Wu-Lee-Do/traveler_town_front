/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { googleImgSearchRequest } from "../../../apis/country/googleApi";

// 관광지 5개 따로 검색 구현
// 검색된 이미지 없을시 빈 이미지 구현

function TouristAttractionComponent({ touristAttractionData }) {
    const [imgUrl, setImgUrl] = useState([]);
    const fetchImages = async () => {
        const promises = touristAttractionData
            .slice(0, 5)
            .map((attraction, index) =>
                googleImgSearchRequest(attraction.photos[0].name)
                    .then((response) => response.json())
                    .then((result) => result.photoUri || "defaultImage.jpg")
                    .catch(() => "defaultImage.jpg")
            );

        const results = await Promise.all(promises);
        setImgUrl(results);
    };

    console.log(imgUrl);

    useEffect(() => {
        if (touristAttractionData && touristAttractionData.length > 0) {
            fetchImages();
        }
    }, [touristAttractionData]);

    // const [imgNum, setImgNum] = useState();

    // const googleImgSearchMutation = useMutation({
    //     mutationKey: "googleImgSearchMutation",
    //     mutationFn: googleImgSearchRequest,
    //     onSuccess: (response) => {
    //         response.json().then((result) => {
    //             console.log(result.photoUri);
    //             setImgUrl((imgUrl) => [...imgUrl, result.photoUri]);
    //         });
    //     },
    //     onError: (error) => {
    //         console.log(error);
    //     },
    // });

    // console.log(imgUrl);
    // console.log(touristAttractionData);
    // useEffect(() => {
    //     if (touristAttractionData && touristAttractionData.length > 0) {
    //         setImgUrl(() => []);
    //         for (let i = 0; i < 5; i++) {
    //             googleImgSearchMutation.mutate(
    //                 touristAttractionData[i].photos[0].name
    //             );
    //         }
    //     }
    // }, [touristAttractionData]);

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
                            <div css={s.box}>{data?.displayName.text}</div>
                            <div>
                                <img src={imgUrl[index]} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TouristAttractionComponent;
