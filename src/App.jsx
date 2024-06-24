import { useQuery } from "react-query";
import Header from "./components/MainPage/Header/Header";
import PageLayout from "./components/PageLayout/PageLayout";
import MainRoute from "./routes/MainRoute";
import { getPricipalRequest } from "./apis/auth/authApi";

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
            {principalQuery.isLoading ? (
                <></>
            ) : (
                <PageLayout>
                    <Header />
                    <MainRoute />
                </PageLayout>
            )}
        </>
    );
}

export default App;
