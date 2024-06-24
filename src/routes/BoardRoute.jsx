import React from "react";
import { Route, Routes } from "react-router-dom";
import MustGoRestaurantListPage from "../pages/boardPages/mustGoRestaurantListPage/MustGoRestaurantListPage";

import BookmarkPage from "../pages/bookmarkPage/BookmarkPage";
import MustGoRestaurantWritePage from "../pages/boardPages/mustGoRestaurantWritePage/MustGoRestaurantWritePage";

function AuthRoute() {
    return (
        <>
            <Routes>
                <Route
                    path="/mustgorestaurant"
                    element={<MustGoRestaurantListPage />}
                />
                <Route
                    path="/mustgorestaurant/write"
                    element={<MustGoRestaurantWritePage />}
                />
                <Route path="/bookmark" element={<BookmarkPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;
