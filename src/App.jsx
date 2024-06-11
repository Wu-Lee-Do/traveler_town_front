import { useQuery } from "react-query";
import Header from "./components/MainPage/Header/Header";
import PageLayout from "./components/PageLayout/PageLayout";
import AuthRoute from "./routes/AuthRoute";
import MainRoute from "./routes/MainRoute";
import { getPricipalRequest } from "./apis/auth/authApi";
import AccountRoute from "./routes/AccountRoute";

function App() {
    const principalQuery = useQuery(["principalQuery"], getPricipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: (error) => {
            console.log("오류");
            console.log(error);
        },
    });

    return (
        <>
            <PageLayout>
                <Header />
                <MainRoute />
            </PageLayout>
        </>
    );
}

export default App;
