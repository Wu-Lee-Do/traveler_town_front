/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/스위스.jpeg";
import defaultProfileImg from "../../../assets/defaultImg.webp";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import {
    getMustGoRestaurantAll,
    getMustGoRestaurantAllBySearch,
} from "../../../apis/board/mustGoRestaurantApi";
import BoardSearchComponent from "../BoardSearchComponent/BoardSearchComponent";
import BoardCardComponent from "../BoardCardComponent/BoardCardComponent";

function BoardListPageComponent({ listTitle, boardCategoryId }) {
    const [mustGoRestaurants, setMustGoRestaurants] = useState([]);
    const [boardTitle, setBoardTitle] = useState("");
    const [searchState, setSearchState] = useState(false);
    const navigate = useNavigate();

    const searchKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchState(true);
        }
    };

    const mustGoRestaurantsQuery = useQuery(
        ["mustGoRestaurantsQuery"],
        async () => await getMustGoRestaurantAll(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMustGoRestaurants(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const mustGoRestaurantsSearchQuery = useQuery(
        ["mustGoRestaurantsSearchQuery", boardTitle],
        async () =>
            await getMustGoRestaurantAllBySearch({
                boardTitle: boardTitle,
            }),
        {
            enabled: !!boardTitle && searchState,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMustGoRestaurants(response.data);
                setSearchState(false);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>{listTitle}</h1>
                    <div css={s.searchBox}>
                        <BoardSearchComponent
                            setSearchText={setBoardTitle}
                            onKeyDown={searchKeyDown}
                            placeholder={"게시물 검색"}
                            onClick={() => setSearchState(true)}
                        />
                        {/* <input type="text" placeholder="게시물 검색"/>
                        <button>
                            <IoSearchOutline />
                        </button> */}
                    </div>
                </div>
                <div css={s.listHeader}>
                    <div>
                        <div>최신</div>
                        <div>인기</div>
                    </div>
                    <button
                        onClick={() =>
                            navigate("/board/mustgorestaurant/write")
                        }
                    >
                        <TfiWrite />
                    </button>
                </div>
                <div css={s.listLayout}>
                    <div css={s.listWrap}>
                        {mustGoRestaurants.map((data) => (
                            <BoardCardComponent
                                key={data.boardId}
                                boardId={data.boardId}
                                boardTitle={data.boardTitle}
                                boardContent={data.boardContent}
                                createDate={data.createDate}
                                updateDate={data.updateDate}
                                profileImg={data.profileImg}
                                nickname={data.nickname}
                                countryNameKor={data.countryNameKor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardListPageComponent;
