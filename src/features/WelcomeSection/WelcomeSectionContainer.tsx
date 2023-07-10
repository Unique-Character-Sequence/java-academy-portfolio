import { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import { useAppDispatch } from "../../app/hooks";
import { setShouldFade, setWindowType } from "../ModalPopup/ModalPopupSlice";

const WelcomeSectionContainer = () => {
    const dispatch = useAppDispatch()

    const [clicked_SL, setClicked_SL] = useState<boolean>(true);
    const handleClick_SL = (): void => {
        setClicked_SL((prev) => !prev);
        setTimeout(() => setClicked_SL((prev) => !prev), 500);
    };
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

    return (
        <WelcomeSection
            clicked_SL={clicked_SL}
            handleClick_SL={handleClick_SL}
            clicked_hamburger={clicked_hamburger}
            handleClick_hamburger={handleClick_hamburger}
            handleClick_signIn={handleClick_signIn}
            handleClick_signUp={handleClick_signUp}
        />
    )
}

export default WelcomeSectionContainer