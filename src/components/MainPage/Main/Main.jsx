/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpeg";
import defaultImg from "../../../assets/defaultImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

function Main() {
    return (
        <div css={s.main}>
            <h1 css={s.mainTitle}>여행자들을 위한 쉼터</h1>
            <div css={s.searchBox}>
                <IoSearchOutline />
                <input
                    type="text"
                    placeholder="어느 나라로 여행을 떠나시나요?"
                />
            </div>
            <div css={s.bannerBox}>
                <div css={s.banner}>
                    <Swiper
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <img src={banner1} alt="" />
                            <div css={s.bannerTitle}>
                                <h1>지금 실시간으로 여행 동행을 찾아봐요</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner2} alt="" />
                            <div css={s.bannerTitle}>
                                <h1>
                                    여행 준비 중이라면, 함께 이야기를 나눠요
                                </h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner3} alt="" />
                            <div css={s.bannerTitle}>
                                <h1>전 세계 맛집, 같이 공유해봐요</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div css={s.postLayout}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper"
                    navigation={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <div css={s.postBox}>
                            <div css={s.postHeader}>
                                <div css={s.profileImg}>
                                    <img src={defaultImg} alt="" />
                                </div>
                                <div css={s.nickname}>닉네임</div>
                            </div>
                            <div css={s.postMain}>
                                <span>게시글입니다.</span>
                                <div>이미지</div>
                            </div>
                            <div css={s.postFooter}>
                                <div>댓글</div>
                                <div>좋아요</div>
                                <div>북마크</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.postBox}>포스트 박스2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.postBox}>포스트 박스3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.postBox}>포스트 박스4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.postBox}>포스트 박스5</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Main;
