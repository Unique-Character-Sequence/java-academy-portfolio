import { useAppSelector } from "../../app/hooks";
import ProfilePage from "../ProfilePage/ProfilePage";
import WelcomeSectionContainer from "../WelcomeSection/WelcomeSectionContainer";


const MainPage = () => {
    const isLoggedIn = useAppSelector((state) => state.mainPage.loggedIn)
    return (
        <div className="mainDiv">
            {isLoggedIn ? <ProfilePage /> : <WelcomeSectionContainer />}
        </div>
    );
};

export default MainPage;