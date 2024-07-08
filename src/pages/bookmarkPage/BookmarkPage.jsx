/** @jsxImportSource @emotion/react */
import { IoSearchOutline } from "react-icons/io5";
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import {
    getCountryAllRequest,
    getCountryBookmarkRequest,
} from "../../apis/country/countryApi";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { getBoardBookmarkAllByCategoryId } from "../../apis/board/boardApi";
import BoardCardComponent from "../../components/BoardPage/BoardCardComponent/BoardCardComponent";

function BookmarkPage() {
    useAuthCheck();
    const [countryBookmarkList, setCountryBookmarkList] = useState();
    const [boardBookmarkList, setBoardBookmarkList] = useState();
    const [allCountryData, setAllCountryData] = useState();
    const [countryList, setCountryList] = useState();
    const [categoryState, setCategoryState] = useState(1);
    const [boardCategoryId, setBoardCategoryId] = useState();
    const [detailUrl, setDetailUrl] = useState();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const navigate = useNavigate();

    const getCountryBookmarkQuery = useQuery(
        ["getCountryBookmarkQuery"],
        getCountryBookmarkRequest,
        {
            enabled: categoryState === 1,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setCountryBookmarkList(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const getAllCountryQuery = useQuery(
        ["getAllCountryQuery"],
        getCountryAllRequest,
        {
            enabled: categoryState === 1,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setAllCountryData(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const getBoardBookmarkAllByCategoryIdQuery = useQuery(
        [
            "getBoardBookmarkAllByCategoryIdQuery",
            {
                boardCategoryId: boardCategoryId,
                userId: principalData?.data.userId,
            },
        ],
        () =>
            getBoardBookmarkAllByCategoryId({
                boardCategoryId: boardCategoryId,
                userId: principalData?.data.userId,
            }),
        {
            onSuccess: (response) => {
                console.log(response.data);
                setBoardBookmarkList(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    useEffect(() => {
        const fetchDataAndImages = async () => {
            try {
                const storage = getStorage();

                const mergedData = await Promise.all(
                    allCountryData.reduce((acc, country) => {
                        const bookmark = countryBookmarkList.find(
                            (bookmark) =>
                                bookmark.countryCode === country.countryCode
                        );
                        if (bookmark) {
                            acc.push(
                                (async () => {
                                    const url = await getDownloadURL(
                                        ref(
                                            storage,
                                            `country/${country.countryCode}.gif`
                                        )
                                    );
                                    return {
                                        ...country,
                                        ...bookmark,
                                        imageUrl: url,
                                    };
                                })()
                            );
                        }
                        return acc;
                    }, [])
                );
                const sortedData = (await Promise.all(mergedData)).sort(
                    (a, b) => new Date(b.createDate) - new Date(a.createDate)
                );

                setCountryList(sortedData);
            } catch (error) {
                console.log(error);
            }
        };

        if (
            allCountryData?.length > 0 &&
            countryBookmarkList?.length > 0 &&
            categoryState === 1
        ) {
            fetchDataAndImages();
        }
        getBoardBookmarkAllByCategoryIdQuery.refetch();
    }, [allCountryData, countryBookmarkList, categoryState]);

    useEffect(() => {
        console.log(categoryState);
        setCategoryState(1);
    }, []);

    const handleCountryCardClick = (country) => {
        navigate(`/country?search=${country}`);
    };

    const handleCategoryClick = (category) => {
        setCategoryState(category);
        if (category === 4) {
            setCountryList([]);
            setDetailUrl("mustgorestaurant");
            setBoardCategoryId(1);
        } else if (category === 3) {
            setCountryList([]);
            setDetailUrl("travel");
            setBoardCategoryId(2);
        } else if (category === 2) {
            setCountryList([]);
            setDetailUrl("together");
            setBoardCategoryId(3);
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>즐겨찾기</h1>
                    <div css={s.searchBox}>
                        <input type="text" placeholder="게시물 검색" />
                        <button>
                            <IoSearchOutline />
                        </button>
                    </div>
                </div>
                <div css={s.listHeader(categoryState)}>
                    <div onClick={() => handleCategoryClick(1)}>국가</div>
                    <div onClick={() => handleCategoryClick(2)}>동행</div>
                    <div onClick={() => handleCategoryClick(3)}>여행지</div>
                    <div onClick={() => handleCategoryClick(4)}>맛집</div>
                </div>
                <div css={s.listLayout}>
                    <div css={s.listWrap}>
                        {categoryState === 1
                            ? countryList?.map((country, index) => (
                                  <div key={index} css={s.countryCard}>
                                      <div
                                          css={s.imgBox}
                                          onClick={() =>
                                              handleCountryCardClick(
                                                  country.countryNameKor
                                              )
                                          }
                                      >
                                          <img src={country.imageUrl} alt="" />
                                      </div>
                                      <div css={s.boardText}>
                                          <h3>{country.countryNameKor}</h3>
                                      </div>
                                  </div>
                              ))
                            : boardBookmarkList?.map((board, index) => (
                                  <BoardCardComponent
                                      key={index}
                                      boardId={board.boardId}
                                      boardTitle={board.boardTitle}
                                      boardContent={board.boardContent}
                                      createDate={board.createDate}
                                      nickname={board.nickname}
                                      profileImg={board.profileImg}
                                      boardBookmarkCount={
                                          board.boardBookmarkCount
                                      }
                                      boardLikeCount={board.boardLikeCount}
                                      boardCommentCount={
                                          board.boardCommentCount
                                      }
                                      countryNameKor={board.countryNameKor}
                                      detailUrl={detailUrl}
                                  />
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookmarkPage;
