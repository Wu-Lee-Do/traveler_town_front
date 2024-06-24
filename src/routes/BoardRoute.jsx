import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< 82-맛집-게시글-작성-페이지-구현
import MustGoRestaurantListPage from "../pages/boardPages/mustGoRestaurantListPage/MustGoRestaurantListPage";
=======
import MustGoRestaurantPage from "../pages/boardPages/mustGoRestaurantListPage/MustGoRestaurantPage";
>>>>>>> main
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
