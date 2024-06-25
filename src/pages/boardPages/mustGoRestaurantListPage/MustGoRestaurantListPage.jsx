/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/스위스.jpeg";
import defaultProfileImg from "../../../assets/defaultImg.webp";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMustGoRestaurantAll, getMustGoRestaurantAllBySearch } from "../../../apis/board/mustGoRestaurantApi";
import BoardCardComponent from "../../../components/BoardPage/BoardCardComponent/BoardCardComponent";
import BoardSearchComponent from "../../../components/BoardPage/BoardSearchComponent/BoardSearchComponent";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import BoardListPageComponent from "../../../components/BoardPage/BoardListPageComponent/BoardListPageComponent";

function MustGoRestaurantListPage(props) {
    const [mustGoRestaurants, setMustGoRestaurants] = useState([]);
    const [boardTitle, setBoardTitle] = useState("");
    const [searchState, setSearchState] = useState(false);
    const navigator = useNavigate();

    const searchKeyDown = (e) => {
        if(e.key === "Enter") {
            setSearchState(true);
        }
    }

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
        async () => await getMustGoRestaurantAllBySearch({
            boardTitle: boardTitle
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
            }
        }
    );

    useEffect(() => {
        console.log(mustGoRestaurants);
    }, [mustGoRestaurants]);

    return (
        <BoardListPageComponent listTitle={"맛집"}/>
    );
}

export default MustGoRestaurantListPage;
