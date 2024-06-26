/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/스위스.jpeg";
import defaultProfileImg from "../../../assets/defaultImg.webp";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
    getMustGoRestaurantAll,
    getMustGoRestaurantAllBySearch,
} from "../../../apis/board/mustGoRestaurantApi";
import BoardCardComponent from "../../../components/BoardPage/BoardCardComponent/BoardCardComponent";
import BoardSearchComponent from "../../../components/BoardPage/BoardSearchComponent/BoardSearchComponent";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import BoardListPageComponent from "../../../components/BoardPage/BoardListPageComponent/BoardListPageComponent";
import { getBoardsAll } from "../../../apis/board/boardApi";

function MustGoRestaurantListPage({ boardCategoryId }) {
    return (
        <BoardListPageComponent
            listTitle={"맛집"}
            boardCategoryId={boardCategoryId}
        />
    );
}

export default MustGoRestaurantListPage;
