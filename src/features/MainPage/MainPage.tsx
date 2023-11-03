import { useAppSelector } from "../../app/hooks";
import ProfilePage from "../ProfilePage/ProfilePage";
import WelcomeSectionContainer from "../WelcomeSection/WelcomeSectionContainer";


const MainPage = () => {
    const isLoggedIn = useAppSelector((state) => state.mainPage.loggedIn)
    const currentPage = useAppSelector((state) => state.mainPage.currentPage)
    let pageComponent: any;
    switch (currentPage) {
        case "ProfilePage":
            // pageComponent = <WelcomeSectionContainer />;
            pageComponent = <ProfilePage />;
            break;
        case "MainPage":
            pageComponent = <WelcomeSectionContainer />;
            break;
        default:
            pageComponent = null;
    }

    return (
        <div className="mainDiv">
            {/* {isLoggedIn ? <ProfilePage /> : <WelcomeSectionContainer />} */}
            {pageComponent}
        </div>
    );
};

export default MainPage;