import { useState } from "react";
import WelcomeSection from "./WelcomeSection";

const WelcomeSectionContainer = () => {

    const [clicked_SL, setClicked_SL] = useState<boolean>(true);
    const handleClick_SL = (): void => {
        setClicked_SL((prev) => !prev);
        setTimeout(() => setClicked_SL((prev) => !prev), 500);
    };
    const [clicked_hamburger, setClicked_hamburger] = useState<boolean>(false);
    const handleClick_hamburger = (): void => {
        setClicked_hamburger((prev) => !prev)
        console.log(clicked_hamburger)
    };
    const [clicked_signIn, setClicked_signIn] = useState<boolean>(false);
    const handleClick_signIn = (): void => {
        setClicked_signIn((prev) => !prev)
    };

    return (
        <WelcomeSection
            clicked_SL={clicked_SL}
            handleClick_SL={handleClick_SL}
            clicked_hamburger={clicked_hamburger}
            handleClick_hamburger={handleClick_hamburger}
            clicked_signIn={clicked_signIn}
            handleClick_signIn={handleClick_signIn}
        />
    )
}

export default WelcomeSectionContainer