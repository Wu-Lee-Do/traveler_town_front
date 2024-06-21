/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    addCountryBookmarkRequest,
    getCountryBookmarkRequest,
    removeCountryBookmarkRequest,
    searchCountryRequest,
} from "../../../apis/country/countryApi";
import { useMutation } from "react-query";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import TouristAttractionComponent from "../../../components/CountryInfoPage/TouristAttractionComponent/TouristAttractionComponent";
import {
    googleRestaurantSearchRequest,
    googleTouristAttractionSearchRequest,
} from "../../../apis/country/googleApi";
import RestaurantComponent from "../../../components/CountryInfoPage/RestaurantComponent/RestaurantComponent";

function CountryInfoPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchCountryData, setSearchCountryData] = useState();
    const [searchCountry, setSearchCountry] = useState("");
    const [countryImgUrl, setCountryImgUrl] = useState("");
    const [countryBookmarkList, setCountryBookmarkList] = useState([]);
    const [bookmark, setBookmark] = useState();
    const [touristAttractionData, setTouristAttractionData] = useState();
    const [restaurantData, setRestaurantData] = useState();

    const googleTouristAttractionSearchMutation = useMutation({
        mutationKey: "googleTouristAttractionSearchMutation",
        mutationFn: googleTouristAttractionSearchRequest,
        onSuccess: (response) => {
            response.json().then((data) => {
                setTouristAttractionData(() => data.places);
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const googleRestaurantSearchMutation = useMutation({
        mutationKey: "googleRestaurantSearchMutation",
        mutationFn: googleRestaurantSearchRequest,
        onSuccess: (response) => {
            response.json().then((data) => {
                setRestaurantData(() => data.places);
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const getCountryBookmarkMutation = useMutation({
        mutationKey: "getCountryBookmarkMutation",
        mutationFn: getCountryBookmarkRequest,
        onSuccess: (response) => {
            setCountryBookmarkList(response.data);
            console.log(response.data);
            if (
                !!response.data.filter(
                    (bookmark) =>
                        bookmark.countryCode === searchCountryData?.countryCode
                )[0]
            ) {
                setBookmark(<FaHeart />);
            } else {
                setBookmark(<FaRegHeart />);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const searchCountryMutation = useMutation({
        mutationKey: "searchCountryMutation",
        mutationFn: searchCountryRequest,
        onSuccess: (response) => {
            if (response.data === "") {
                alert("검색결과가 존재하지 않습니다.");
                window.location.replace("/");
            }
            setSearchCountryData(() => response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const addCountryBookmarkMutation = useMutation({
        mutationKey: "addCountryBookmarkMutation",
        mutationFn: addCountryBookmarkRequest,
        onSuccess: (response) => {
            setBookmark(() => <FaHeart />);
            getCountryBookmarkMutation.mutate();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const removeCountryBookmarkMutation = useMutation({
        mutationKey: "removeCountryBookmarkMutation",
        mutationFn: removeCountryBookmarkRequest,
        onSuccess: (response) => {
            setBookmark(() => <FaRegHeart />);
            getCountryBookmarkMutation.mutate();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleBookmarkButtonClick = () => {
        if (
            !!countryBookmarkList.filter(
                (bookmark) =>
                    bookmark.countryCode === searchCountryData?.countryCode
            )[0]
        ) {
            removeCountryBookmarkMutation.mutate(
                countryBookmarkList.filter(
                    (bookmark) =>
                        bookmark.countryCode === searchCountryData.countryCode
                )[0].countryBookmarkId
            );
        } else {
            addCountryBookmarkMutation.mutate({
                countryCode: searchCountryData?.countryCode,
            });
        }
    };

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
            window.location.replace(`/country?search=${searchCountry}`);
        }
    };

    const handleSearchOnChange = (e) => {
        setSearchCountry(() => e.target.value);
    };
    useEffect(() => {
        googleTouristAttractionSearchMutation.mutate(
            searchCountryData?.countryNameEng
        );
        googleRestaurantSearchMutation.mutate(
            searchCountryData?.countryNameEng
        );
    }, [searchCountryData]);

    useEffect(() => {
        searchCountryMutation.mutate(searchParams.get("search"));
    }, []);

    useEffect(() => {
        getCountryBookmarkMutation.mutate();
    }, []);

    useEffect(() => {
        const storage = getStorage();
        getDownloadURL(
            ref(storage, `country/${searchCountryData?.countryCode}.gif`)
        )
            .then((url) => {
                setCountryImgUrl(url);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [searchCountryData]);

    return (
        <div css={s.layout}>
            <div css={s.infoLayout}>
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
                <div css={s.countryLayout}>
                    <div css={s.imgBox}>
                        <img src={countryImgUrl} alt="" />
                    </div>
                    <div css={s.infoBox}>
                        <div css={s.titleBox}>
                            <h1>{searchCountryData?.countryNameKor}</h1>
                            <button onClick={handleBookmarkButtonClick}>
                                {bookmark}
                            </button>
                        </div>
                        <span>{searchCountryData?.countryNameEng}</span>
                        <div>
                            <div>
                                {searchCountryData?.capital === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>수도 : {searchCountryData?.capital}</p>
                                )}
                                {searchCountryData?.language === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>언어 : {searchCountryData?.language}</p>
                                )}

                                <p>
                                    인구 :{" "}
                                    {searchCountryData?.population.toLocaleString(
                                        "ko-KR"
                                    )}
                                    명
                                </p>
                                {searchCountryData?.climate === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>기후 : {searchCountryData?.climate}</p>
                                )}
                                <p>
                                    면적 :{" "}
                                    {searchCountryData?.area.toLocaleString(
                                        "ko-KR"
                                    )}
                                    km²
                                    {searchCountryData?.areaExp === "(NULL)"
                                        ? ""
                                        : searchCountryData?.areaExp}
                                </p>
                                {searchCountryData?.people === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>민족 : {searchCountryData?.people}</p>
                                )}
                                {searchCountryData?.religion === "(NULL)" ? (
                                    ""
                                ) : (
                                    <p>종교 : {searchCountryData?.religion}</p>
                                )}
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div css={s.touristAttractionLayout}>
                    <TouristAttractionComponent
                        touristAttractionData={touristAttractionData}
                    />
                </div>
                <div css={s.restaurantLayout}>
                    <RestaurantComponent restaurantData={restaurantData} />
                </div>
            </div>
        </div>
    );
}

export default CountryInfoPage;
