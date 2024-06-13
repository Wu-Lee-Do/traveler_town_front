import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPages/MainPage";
import AuthRoute from "../routes/AuthRoute";
import AccountRoute from "../routes/AccountRoute";
import CountryInfoPage from "../pages/countryInfoPage/CountryInfoPage";

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/country" element={<CountryInfoPage />} />
                <Route path="/auth/*" element={<AuthRoute />} />
                <Route path="/account/*" element={<AccountRoute />} />
            </Routes>
        </>
    );
}

export default MainRoute;
