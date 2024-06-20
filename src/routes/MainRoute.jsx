import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPages/MainPage";
import AuthRoute from "../routes/AuthRoute";
import AccountRoute from "../routes/AccountRoute";
import CountryInfoPage from "../pages/countryPages/countryInfoPage/CountryInfoPage";
import TouristAttractionInfoPage from "../pages/countryPages/touristAttractionInfoPage/TouristAttractionInfoPage";
import RestaurantInfoPage from "../pages/countryPages/restaurantInfoPage/RestaurantInfoPage";

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/country" element={<CountryInfoPage />} />
                <Route
                    path="/touristAttraction"
                    element={<TouristAttractionInfoPage />}
                />
                <Route path="/restaurant" element={<RestaurantInfoPage />} />
                <Route path="/auth/*" element={<AuthRoute />} />
                <Route path="/account/*" element={<AccountRoute />} />
            </Routes>
        </>
    );
}

export default MainRoute;
