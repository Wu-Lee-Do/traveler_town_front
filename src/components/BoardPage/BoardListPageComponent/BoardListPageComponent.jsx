/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FaPencilAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

import { useNavigate } from "react-router-dom";
import BoardSearchComponent from "../BoardSearchComponent/BoardSearchComponent";
import BoardCardComponent from "../BoardCardComponent/BoardCardComponent";
import {
    getBoardsAll,
    getBoardsAllBySearch,
} from "../../../apis/board/boardApi";

function BoardListPageComponent({ listTitle, boardCategoryId }) {
    const [mustGoRestaurants, setMustGoRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchState, setSearchState] = useState(false);
    const [categoryState, setCategoryState] = useState(1);
    const navigate = useNavigate();

    const searchKeyDown = (e) => {
        if (e.key === "Enter") {
            if (searchText.length === 0) {
                alert("검색어를 입력해주세요.");
                return;
            }
            setSearchState(true);
        }
    };

    const boardsAllQuery = useQuery(
        ["boardsAllQuery"],
        async () =>
            await getBoardsAll({
                boardCategoryId: boardCategoryId,
            }),
        {
            enabled: categoryState === 1,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setCategoryState(1);
                setMustGoRestaurants(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const boardsAllBySearchQuery = useQuery(
        ["boardsAllBySearchQuery"],
        async () =>
            await getBoardsAllBySearch({
                boardCategoryId: boardCategoryId,
                searchText: searchText,
            }),
        {
            enabled: searchState === true,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setSearchState(false);
                setCategoryState(3);
                setMustGoRestaurants(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    useEffect(() => {
        setCategoryState(1);
    }, []);
    console.log(categoryState);
    const handleCategoryClick = (category) => {
        setCategoryState(category);
        if (category !== 1) {
            setMustGoRestaurants([]);
        }
    };

    const handleResetClick = () => {
        setSearchText("");
        boardsAllQuery.refetch();
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
                                searchText={searchText}
                                setSearchText={setSearchText}
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
