import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPages/MainPage";

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    );
}

export default MainRoute;
