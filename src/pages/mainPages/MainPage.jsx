import PageLayout from "../../components/PageLayout/PageLayout";
import Header from "../../components/MainPage/Header/Header";
import Main from "../../components/MainPage/Main/Main";
import Footer from "../../components/MainPage/Footer/Footer";

function MainPage() {
    return (
        <PageLayout>
            <Header />
            <Main />
            <Footer />
        </PageLayout>
    );
}

export default MainPage;
