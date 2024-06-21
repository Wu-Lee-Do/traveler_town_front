import React from "react";
import { Route, Routes } from "react-router-dom";
import MustGoRestaurantPage from "../pages/boardPages/mustGoRestaurantPage/MustGoRestaurantPage";

function AuthRoute() {
    return (
        <>
            <Routes>
                <Route
                    path="/mustgorestaurant"
                    element={<MustGoRestaurantPage />}
                />
            </Routes>
        </>
    );
}

export default AuthRoute;
