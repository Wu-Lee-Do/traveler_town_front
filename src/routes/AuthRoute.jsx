import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninPage from "../pages/authPages/signinPage/SigninPage";

function AuthRoute() {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SigninPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;
