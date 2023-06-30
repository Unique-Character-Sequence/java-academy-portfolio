import { useState } from "react";
import WelcomeSection from "./WelcomeSection";

const WelcomeSectionContainer = () => {

    const [clicked_SL, setClicked_SL] = useState(true);
    const handleClick_SL = () => {
        setClicked_SL((prev) => !prev);
        setTimeout(() => setClicked_SL((prev) => !prev), 500);
    };
    const [clicked_hamburger, setClicked_hamburger] = useState(false);
    const handleClick_hamburger = () => {
        setClicked_hamburger((prev) => !prev)
        console.log(clicked_hamburger)
    };
    const [clicked_signIn, setClicked_signIn] = useState(false);
    const handleClick_signIn = () => {
        setClicked_signIn((prev) => !prev)
        console.log(clicked_signIn)
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