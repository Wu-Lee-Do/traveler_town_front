import Footer from "./components/MainPage/Footer/Footer";
import Header from "./components/MainPage/Header/Header";
import PageLayout from "./components/PageLayout/PageLayout";
import AuthRoute from "./routes/AuthRoute";
import MainRoute from "./routes/MainRoute";

function App() {
    return (
        <>
            <PageLayout>
                <Header />
                <MainRoute />
                <AuthRoute />
                <Footer />
            </PageLayout>
        </>
    );
}

export default App;
