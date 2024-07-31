import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninPage from "../pages/authPages/signinPage/SigninPage";
import SignupPage from "../pages/authPages/signupPage/SignupPage";
import OAuth2Page from "../pages/authPages/OAuth2Page/OAuth2Page";

function AuthRoute() {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;
