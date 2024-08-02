import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPages/MainPage";
import AuthRoute from "../routes/AuthRoute";
import AccountRoute from "../routes/AccountRoute";
import BoardRoute from "../routes/BoardRoute";
import CountryInfoPage from "../pages/countryPages/countryInfoPage/CountryInfoPage";
import TouristAttractionInfoPage from "../pages/countryPages/touristAttractionInfoPage/TouristAttractionInfoPage";
import RestaurantInfoPage from "../pages/countryPages/restaurantInfoPage/RestaurantInfoPage";
import OAuth2Page from "../pages/authPages/OAuth2Page/OAuth2Page";
import OAuth2SigninPage from "../pages/authPages/OAuth2SigninPage/OAuth2SigninPage";
import OAuth2MergePage from "../pages/authPages/OAuth2MergePage/OAuth2MergePage";
import ProfilePage from "../pages/profilePage/ProfilePage";

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
                <Route path="/board/*" element={<BoardRoute />} />
                <Route path="/auth/*" element={<AuthRoute />} />
                <Route path="/oauth2" element={<OAuth2Page />} />
                <Route path="/oauth2/signin" element={<OAuth2SigninPage />} />
                <Route path="/oauth2/merge" element={<OAuth2MergePage />} />
                <Route path="/account/*" element={<AccountRoute />} />
                <Route path="/profile/*" element={<ProfilePage />} />
            </Routes>
        </>
    );
}

export default MainRoute;
