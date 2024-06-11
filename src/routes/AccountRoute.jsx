import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountPage from "../pages/accountPages/accountPage/AccountPage";

function AccountRoute() {
    return (
        <>
            <Routes>
                <Route path="mypage" element={<AccountPage />} />
            </Routes>
        </>
    );
}

export default AccountRoute;
