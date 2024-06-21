import React from "react";
import { Route, Routes } from "react-router-dom";
import MustGoRestaurantPage from "../pages/boardPages/mustGoRestaurantPage/MustGoRestaurantPage";
import BookmarkPage from "../pages/bookmarkPage/BookmarkPage";

function AuthRoute() {
    return (
        <>
            <Routes>
                <Route
                    path="/mustgorestaurant"
                    element={<MustGoRestaurantPage />}
                />
                <Route path="/bookmark" element={<BookmarkPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;
