import React from "react";
import { Route, Routes } from "react-router-dom";
import MustGoRestaurantListPage from "../pages/boardPages/mustGoRestaurantListPage/MustGoRestaurantListPage";

import BookmarkPage from "../pages/bookmarkPage/BookmarkPage";
import MustGoRestaurantWritePage from "../pages/boardPages/mustGoRestaurantWritePage/MustGoRestaurantWritePage";
import BoardDetailPage from "../pages/boardPages/boardDetailPage/BoardDetailPage";
import MustGoRestaurantUpdatePage from "../pages/boardPages/mustGoRestaurantUpdatePage/MustGoRestaurantUpdatePage";

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
                    element={<BoardDetailPage />}
                />
                <Route
                    path="/mustgorestaurant/:boardId/update"
                    element={<MustGoRestaurantUpdatePage boardCategoryId={1} />}
                />
                <Route path="/bookmark" element={<BookmarkPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;
