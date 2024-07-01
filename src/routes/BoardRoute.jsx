import React from "react";
import { Route, Routes } from "react-router-dom";
import MustGoRestaurantListPage from "../pages/boardPages/mustGoRestaurantListPage/MustGoRestaurantListPage";

import BookmarkPage from "../pages/bookmarkPage/BookmarkPage";
import MustGoRestaurantWritePage from "../pages/boardPages/mustGoRestaurantWritePage/MustGoRestaurantWritePage";
import BoardDetailPage from "../pages/boardPages/boardDetailPage/BoardDetailPage";
import MustGoRestaurantUpdatePage from "../pages/boardPages/mustGoRestaurantUpdatePage/MustGoRestaurantUpdatePage";
import TravelListPage from "../pages/boardPages/travelListPage/TravelListPage";
import TravelWritePage from "../pages/boardPages/travelWritePage/TravelWritePage";
import TravelUpdatePage from "../pages/boardPages/travelUpdatePage/TravelUpdatePage";

function AuthRoute() {
    return (
        <>
            <Routes>
                <Route
                    path="/mustgorestaurant"
                    element={<MustGoRestaurantListPage boardCategoryId={1} />}
                />
                <Route
                    path="/mustgorestaurant/write"
                    element={<MustGoRestaurantWritePage />}
                />
                <Route
                    path="/mustgorestaurant/:boardId"
                    element={<BoardDetailPage title={"맛집"} />}
                />
                <Route
                    path="/mustgorestaurant/:boardId/update"
                    element={<MustGoRestaurantUpdatePage boardCategoryId={1} />}
                />
                <Route path="/bookmark" element={<BookmarkPage />} />
                <Route
                    path="/travel"
                    element={<TravelListPage boardCategoryId={2} />}
                />
                <Route path="/travel/write" element={<TravelWritePage />} />
                <Route
                    path="/travel/:boardId/update"
                    element={<TravelUpdatePage boardCategoryId={2} />}
                />
                <Route
                    path="/travel/:boardId"
                    element={<BoardDetailPage title={"여행지"} />}
                />
            </Routes>
        </>
    );
}

export default AuthRoute;
