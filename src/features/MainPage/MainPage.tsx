import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "./styles/MainPage.sass"
import React from 'react';

const MainPage = () => {
    return (
        <div className="mainDiv">
            {/*<Filler/>*/}
            <WelcomeSection />
        </div>
    );
};

export default MainPage;