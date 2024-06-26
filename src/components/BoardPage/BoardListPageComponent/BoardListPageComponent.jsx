/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FaPencilAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

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
    const [categoryState, setCategoryState] = useState(1);
    const navigate = useNavigate();

    const searchKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchState(true);
            setCategoryState(3);
        }
    };

    const mustGoRestaurantsQuery = useQuery(
        ["mustGoRestaurantsQuery"],
        async () => await getMustGoRestaurantAll(),
        {
            enabled: categoryState === 1,
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

    useEffect(() => {
        setCategoryState(1);
    }, []);

    const handleCategoryClick = (category) => {
        setCategoryState(category);
        if (category !== 1) {
            setMustGoRestaurants([]);
        }
    };

    const handleResetClick = () => {
        setCategoryState(1);
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>{listTitle}</h1>
                    <div>
                        <button onClick={handleResetClick}>
                            <GrPowerReset />
                        </button>
                        <div css={s.searchBox}>
                            <BoardSearchComponent
                                setSearchText={setBoardTitle}
                                onKeyDown={searchKeyDown}
                                placeholder={"게시물 검색"}
                                onClick={() => setSearchState(true)}
                            />
                        </div>
                    </div>
                </div>
                <div css={s.listHeader(categoryState)}>
                    <div>
                        <div onClick={() => handleCategoryClick(1)}>최신</div>
                        <div onClick={() => handleCategoryClick(2)}>인기</div>
                    </div>
                    <button
                        onClick={() =>
                            navigate("/board/mustgorestaurant/write")
                        }
                    >
                        <FaPencilAlt />
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
