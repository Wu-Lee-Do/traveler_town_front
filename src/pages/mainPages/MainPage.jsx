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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../components/MainPage/alertComponent/AlertComponent";
import { useQuery } from "react-query";
import { getBoardsAll } from "../../apis/board/boardApi";

function MainPage() {
    const navigate = useNavigate();
    const [searchCountry, setSearchCountry] = useState("");
    const [animatedText, setAnimatedText] = useState([]);
    const [togetherBoardList, setTogetherBoardList] = useState([]);
    const [travelBoardList, setTravelBoardList] = useState([]);
    const [mustGoRestaurantBoardList, setMustGoRestaurantBoardList] = useState(
        []
    );
    const text = "여행자들을 위한 쉼터";

    const getTogetherBoardListQuery = useQuery(
        ["getTogetherBoardListQuery"],
        async () =>
            await getBoardsAll({
                boardCategoryId: 3,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setTogetherBoardList(
                    response.data
                        .sort(
                            (a, b) =>
                                new Date(b.createDate) - new Date(a.createDate)
                        )
                        .slice(0, 6)
                );
            },
            error: (error) => {
                console.log(error);
            },
        }
    );

    const getTravelBoardListQuery = useQuery(
        ["getTravelBoardListQuery"],
        async () =>
            await getBoardsAll({
                boardCategoryId: 2,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response.data);
                setTravelBoardList(
                    response.data
                        .sort(
                            (a, b) =>
                                new Date(b.createDate) - new Date(a.createDate)
                        )
                        .slice(0, 6)
                );
            },
            error: (error) => {
                console.log(error);
            },
        }
    );
    const getMustGoRestaurantBoardListQuery = useQuery(
        ["getMustGoRestaurantBoardListQuery"],
        async () =>
            await getBoardsAll({
                boardCategoryId: 1,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response.data);
                setMustGoRestaurantBoardList(
                    response.data
                        .sort(
                            (a, b) =>
                                new Date(b.createDate) - new Date(a.createDate)
                        )
                        .slice(0, 6)
                );
            },
            error: (error) => {
                console.log(error);
            },
        }
    );

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

    const getTimeDifference = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const differenceInMilliseconds = now - date;
        const differenceInMinutes = Math.floor(
            differenceInMilliseconds / (1000 * 60)
        );

        if (differenceInMinutes < 1) {
            return "방금";
        } else if (differenceInMinutes < 60) {
            return `${differenceInMinutes}분 전`;
        } else if (differenceInMinutes < 1440) {
            const differenceInHours = Math.floor(differenceInMinutes / 60);
            return `${differenceInHours}시간 전`;
        } else {
            const differenceInDays = Math.floor(differenceInMinutes / 1440);
            return `${differenceInDays}일 전`;
        }
    };

    useEffect(() => {
        let animationTimeouts = [];
        text.split("").forEach((char, index) => {
            animationTimeouts.push(
                setTimeout(() => {
                    setAnimatedText((prev) => [...prev, char]);
                }, index * 100)
            );
        });

        return () => {
            animationTimeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, [text]);

    return (
        <div css={s.main}>
            <h1 css={s.mainTitle}>
                <div>
                    {animatedText.map((char, index) => (
                        <span key={index} css={s.dropAnimation(index)}>
                            {char}
                        </span>
                    ))}
                </div>
            </h1>
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
                                        window.location.replace(
                                            "/board/together"
                                        )
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
                                <h3
                                    onClick={() =>
                                        window.location.replace("/board/travel")
                                    }
                                >
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
                                        window.location.replace(
                                            "/board/mustgorestaurant"
                                        )
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
                    slidesPerView={3}
                    spaceBetween={15}
                    freeMode={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {togetherBoardList?.map((data) => (
                        <SwiperSlide key={data?.boardId}>
                            <div
                                css={s.togetherBox}
                                onClick={() =>
                                    window.location.replace(
                                        `/board/together/${data?.boardId}`
                                    )
                                }
                            >
                                <div css={s.togetherImg}>
                                    <img src={swiss} alt="" />
                                </div>
                                <div css={s.togetherInfo}>
                                    <div>{data?.boardTitle}</div>
                                    <div>
                                        <div>
                                            <div css={s.toProfileImg}>
                                                <img
                                                    src={data?.profileImg}
                                                    alt=""
                                                />
                                            </div>
                                            <div css={s.nickname}>
                                                {data?.nickname}
                                            </div>
                                            <div css={s.profileDetailInfo}>
                                                <div>
                                                    {data?.sex === 1
                                                        ? "• 남자"
                                                        : "• 여자"}
                                                </div>
                                                <div>• {data?.age}대</div>
                                            </div>
                                        </div>
                                        <div css={s.category}>
                                            {data?.countryNameKor}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div css={s.newPostTitle}>
                <h1>최신 여행지 포스트</h1>
            </div>
            <div css={s.postLayout}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {travelBoardList?.map((data) => (
                        <SwiperSlide key={data?.boardId}>
                            <div
                                css={s.postBox}
                                onClick={() =>
                                    window.location.replace(
                                        `/board/travel/${data?.boardId}`
                                    )
                                }
                            >
                                <div css={s.postHeader}>
                                    <div css={s.profileBox}>
                                        <div css={s.profileImg}>
                                            <img
                                                src={data?.profileImg}
                                                alt=""
                                            />
                                        </div>
                                        <div css={s.infoBox}>
                                            <div css={s.nickname}>
                                                {data?.nickname}
                                            </div>
                                            <div css={s.time}>
                                                {getTimeDifference(
                                                    data?.createDate
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.category}>
                                        {data?.countryNameKor}
                                    </div>
                                </div>
                                <div css={s.postMain}>
                                    <div css={s.content}>
                                        <h3>{data?.boardTitle}</h3>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: data?.boardContent,
                                            }}
                                        ></span>
                                    </div>
                                    <div css={s.postImg}>
                                        <img src={usa} alt="" />
                                    </div>
                                </div>
                                <div css={s.postFooter}>
                                    <div>
                                        <BiSolidComment />
                                        <span>{data?.boardCommentCount}</span>
                                    </div>
                                    <div>
                                        <FaHeart />
                                        <span>{data?.boardLikeCount}</span>
                                    </div>
                                    <div>
                                        <FaBookmark />
                                        <span>{data?.boardBookmarkCount}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div css={s.newRestaurantPost}>
                <h1>최신 맛집 포스트</h1>
            </div>
            <div css={s.postLayout}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {mustGoRestaurantBoardList?.map((data) => (
                        <SwiperSlide key={data?.boardId}>
                            <div
                                css={s.postBox}
                                onClick={() =>
                                    window.location.replace(
                                        `/board/mustgorestaurant/${data?.boardId}`
                                    )
                                }
                            >
                                <div css={s.postHeader}>
                                    <div css={s.profileBox}>
                                        <div css={s.profileImg}>
                                            <img
                                                src={data?.profileImg}
                                                alt=""
                                            />
                                        </div>
                                        <div css={s.infoBox}>
                                            <div css={s.nickname}>
                                                {data?.nickname}
                                            </div>
                                            <div css={s.time}>
                                                {getTimeDifference(
                                                    data?.createDate
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.category}>
                                        {data?.countryNameKor}
                                    </div>
                                </div>
                                <div css={s.postMain}>
                                    <div css={s.content}>
                                        <h3>{data?.boardTitle}</h3>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: data?.boardContent,
                                            }}
                                        ></span>
                                    </div>
                                    <div css={s.postImg}>
                                        <img src={usa} alt="" />
                                    </div>
                                </div>
                                <div css={s.postFooter}>
                                    <div>
                                        <BiSolidComment />
                                        <span>{data?.boardCommentCount}</span>
                                    </div>
                                    <div>
                                        <FaHeart />
                                        <span>{data?.boardLikeCount}</span>
                                    </div>
                                    <div>
                                        <FaBookmark />
                                        <span>{data?.boardBookmarkCount}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <AlertComponent />
            <Footer />
        </div>
    );
}

export default MainPage;
