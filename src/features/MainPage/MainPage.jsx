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
        <div className={styles.mainDiv}>
            {/*<Filler/>*/}
            <div className={styles.welcomeDiv}>
                <div className={styles.rectangle41}>
                    <img className={styles.logoTxt} src={logo} alt=""/>
                    <Fade in={clicked}>
                        <div className={styles.rectangle41TextBox}>
                            <span className={styles.textBig1}>Становись</span>
                            <div className={styles.javaTextPosition}>
                                <div className={styles.rectangle16}/>
                                <span className={styles.textBigJavaBrackets}>{"{"}</span>
                                <span className={styles.textBigJava}>Java</span>
                                <span className={styles.textBigJavaBrackets}>{"}"}</span>
                                <span className={styles.textBig3}>-разработчиком</span>
                            </div>
                            <span className={styles.textBig2}>вместе с нами</span>
                        </div>
                    </Fade>
                    <span className={styles.textSmall1}>
                        Получи классную востребованную профессию и зарабатывай  дома
                        <br/>
                        в удобное время
                    </span>
                    <button onClick={handleClick} className={styles.buttonStartLearning}>Начать учиться</button>
                    <img className={styles.group4} src={group4} alt=""/>
                    <img className={styles.group5} src={group5} alt=""/>
                    <div className={styles.ellipse5}/>
                    <div className={styles.ellipse4}/>
                    <div className={styles.group6_ButtonsContainer}>
                        <button className={styles.group6_Button}>
                            <span className={styles.group6_ButtonContent}>Об обучении</span>
                        </button>
                        <button className={styles.group6_Button}>
                            <span className={styles.group6_ButtonContent}>Преимущества</span>
                        </button>
                        <button className={styles.group6_Button}>
                            <span className={styles.group6_ButtonContent}>Отзывы</span>
                        </button>
                        <button className={styles.group6_Button}>
                            <span className={styles.group6_ButtonContent}>Ценовая политика</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;