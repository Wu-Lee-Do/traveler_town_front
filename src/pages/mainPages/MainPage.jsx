/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidComment } from "react-icons/bi";
import { FaHeart, FaBookmark } from "react-icons/fa";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpeg";
import defaultImg from "../../assets/defaultImg.webp";
import usa from "../../assets/usa.webp";
import swiss from "../../assets/스위스.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import Footer from "../../components/MainPage/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const [searchCountry, setSearchCountry] = useState("");

    const activeEnter = (e) => {
        if (e.key === "Enter") {
            handleSearchClick();
        }
    };

    const handleSearchClick = () => {
        if (searchCountry.length === 0) {
            alert("검색할 국가를 입력해주세요.");
            return;
        } else {
            navigate(`/country?search=${searchCountry}`);
        }
    };

    const handleSearchOnChange = (e) => {
        setSearchCountry(() => e.target.value);
    };

    const handleBannerClick = (type) => {
        if (type === "together") {
            navigate("/");
        } else if (type === "travel") {
            navigate("/");
        } else if (type === "mustgorestaurant") {
            window.location.replace("/board/mustgorestaurant");
        }
    };

    return (
        <div css={s.main}>
            <h1 css={s.mainTitle}>여행자들을 위한 쉼터</h1>
            <div css={s.searchBox}>
                <input
                    type="text"
                    placeholder="어느 나라로 여행을 떠나시나요?"
                    value={searchCountry}
                    onChange={handleSearchOnChange}
                    onKeyDown={(e) => activeEnter(e)}
                />
                <button onClick={handleSearchClick}>
                    <IoSearchOutline />
                </button>
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
                                <h3
                                    onClick={() =>
                                        handleBannerClick("together")
                                    }
                                >
                                    함께 갈 동행 찾아보기 →
                                </h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner2} alt="" />
                            <div css={s.bannerTitle}>
                                <h1>
                                    여행 준비 중이라면, 함께 이야기를 나눠요
                                </h1>
                                <h3 onClick={() => handleBannerClick("travel")}>
                                    여행 이야기 공유하러 가기 →
                                </h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner3} alt="" />
                            <div css={s.bannerTitle}>
                                <h1>전 세계 맛집, 같이 공유해봐요</h1>
                                <h3
                                    onClick={() =>
                                        handleBannerClick("mustgorestaurant")
                                    }
                                >
                                    전 세계 맛집 구경하러 가기 →
                                </h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div css={s.newPostTitle}>
                <h1>최신 동행 포스트</h1>
            </div>
            <div css={s.togetherLayout}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div css={s.togetherBox}>
                            <div css={s.togetherImg}>
                                <img src={swiss} alt="" />
                            </div>
                            <div css={s.togetherInfo}>
                                <div>스위스 갈 사람 구해요!!</div>
                                <div>
                                    <div>
                                        <div css={s.toProfileImg}>
                                            <img src={defaultImg} alt="" />
                                        </div>
                                        <div css={s.nickname}>
                                            닉네임 • 20대 • 남자
                                        </div>
                                    </div>
                                    <div css={s.category}>스위스</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.togetherBox}>2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.togetherBox}>3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.togetherBox}>4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.togetherBox}>5</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div css={s.togetherBox}>6</div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div css={s.newPostTitle}>
                <h1>최신 여행지 포스트</h1>
            </div>
            <div css={s.postLayout}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper"
                    navigation={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <div css={s.postBox}>
                            <div css={s.postHeader}>
                                <div css={s.profileBox}>
                                    <div css={s.profileImg}>
                                        <img src={defaultImg} alt="" />
                                    </div>
                                    <div css={s.infoBox}>
                                        <div css={s.nickname}>닉네임</div>
                                        <div css={s.time}>3분전</div>
                                    </div>
                                </div>
                                <div css={s.category}>미국</div>
                            </div>
                            <div css={s.postMain}>
                                <div css={s.content}>
                                    <h3>여기가요</h3>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Neque rerum mollitia
                                        repudiandae nulla, dolores unde
                                        corrupti, nesciunt sed numquam error
                                        magnam blanditiis laboriosam ut minima
                                        incidunt facilis, deserunt ipsum
                                        repellat.
                                    </span>
                                </div>
                                <div css={s.postImg}>
                                    <img src={usa} alt="" />
                                </div>
                            </div>
                            <div css={s.postFooter}>
                                <div>
                                    <BiSolidComment />
                                </div>
                                <div>
                                    <FaHeart />
                                </div>
                                <div>
                                    <FaBookmark />
                                </div>
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
            <div css={s.newRestaurantPost}>
                <h1>최신 맛집 포스트</h1>
            </div>
            <div css={s.postLayout}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper"
                    navigation={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <div css={s.postBox}>
                            <div css={s.postHeader}>
                                <div css={s.profileBox}>
                                    <div css={s.profileImg}>
                                        <img src={defaultImg} alt="" />
                                    </div>
                                    <div css={s.infoBox}>
                                        <div css={s.nickname}>닉네임</div>
                                        <div css={s.time}>3분전</div>
                                    </div>
                                </div>
                                <div css={s.category}>미국</div>
                            </div>
                            <div css={s.postMain}>
                                <div css={s.content}>
                                    <h3>여기가요</h3>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Neque rerum mollitia
                                        repudiandae nulla, dolores unde
                                        corrupti, nesciunt sed numquam error
                                        magnam blanditiis laboriosam ut minima
                                        incidunt facilis, deserunt ipsum
                                        repellat.
                                    </span>
                                </div>
                                <div css={s.postImg}>
                                    <img src={usa} alt="" />
                                </div>
                            </div>
                            <div css={s.postFooter}>
                                <div>
                                    <BiSolidComment />
                                </div>
                                <div>
                                    <FaHeart />
                                </div>
                                <div>
                                    <FaBookmark />
                                </div>
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
            <Footer />
        </div>
    );
}

export default MainPage;
