import React from 'react';
import styles from "./MainPage.module.css"
import "./MainPage.sass"
import Filler from "./Filler";
import logo from "./assets/logo-txt(x2).png"
import group4 from "./assets/Group 4.png"
import group5 from "./assets/Group 5.png"
import Fade from "@mui/material/Fade";

const MainPage = () => {
    const [clicked, setClicked] = React.useState(true);
    const handleClick = () => {
        setClicked((prev) => !prev);
        setTimeout(() => setClicked((prev) => !prev), 500)
    };

    return (
        <div className="mainDiv">
            {/*<Filler/>*/}
            <div className="welcomeDiv">
                <div className="rectangle41">
                    <img className="logoTxt" src={logo} alt=""/>
                    <Fade in={clicked}>
                        <div className="rectangle41TextBox">
                            <span className="textBig1">Становись</span>
                            <div className="javaTextPosition">
                                <div className="rectangle16"/>
                                <span className="textBigJavaBrackets">{"{"}</span>
                                <span className="textBigJava">Java</span>
                                <span className="textBigJavaBrackets">{"}"}</span>
                                <span className="textBig3">-разработчиком</span>
                            </div>
                            <span className="textBig2">вместе с нами</span>
                        </div>
                    </Fade>
                    <span className="textSmall1">
                        Получи классную востребованную профессию и зарабатывай  дома
                        <br/>
                        в удобное время
                    </span>
                    <button onClick={handleClick} className="buttonStartLearning">Начать учиться</button>
                    <img className="group4" src={group4} alt=""/>
                    <img className="group5" src={group5} alt=""/>
                    <div className="ellipse5"/>
                    <div className="ellipse4"/>
                    <div className="group6_ButtonsContainer">
                        <button className="group6_Button1">
                            <span className="group6_ButtonContent">Об обучении</span>
                        </button>
                        <button className="group6_Button2">
                            <span className="group6_ButtonContent">Преимущества</span>
                        </button>
                        <button className="group6_Button3">
                            <span className="group6_ButtonContent">Отзывы</span>
                        </button>
                        <button className="group6_Button4">
                            <span className="group6_ButtonContent">Ценовая политика</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;