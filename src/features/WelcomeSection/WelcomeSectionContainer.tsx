import { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setShouldFade, setWindowType } from "../ModalPopup/ModalPopupSlice";
import { setPage } from "../MainPage/MainPageSlice";

const WelcomeSectionContainer = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector((state) => state.mainPage.loggedIn)

    const [clicked_hamburger, setClicked_hamburger] = useState<boolean>(false);
    const handleClick_hamburger = (): void => {
        setClicked_hamburger((prev) => !prev)
    };

    const handleClick_signIn = () => {
        dispatch(setShouldFade(true))
        dispatch(setWindowType("SignIn"))
    }

    const handleClick_signUp = () => {
        dispatch(setShouldFade(true))
        dispatch(setWindowType("SignUp"))
    }

    const handleClick_profilePage = (): void => {
        dispatch(setPage("ProfilePage"))
    };

    return (
        <WelcomeSection
            isLoggedIn={isLoggedIn}
            clicked_hamburger={clicked_hamburger}
            handleClick_hamburger={handleClick_hamburger}
            handleClick_signIn={handleClick_signIn}
            handleClick_signUp={handleClick_signUp}
            handleClick_profilePage={handleClick_profilePage}
        />
    )
}

export default WelcomeSectionContainer