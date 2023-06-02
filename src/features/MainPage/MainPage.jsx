import React from 'react';
import styles from "./MainPage.module.css"
import Filler from "./Filler";
import logo from "./assets/logo-txt(x2).png"
import Box from "@mui/material/Box";

const MainPage = () => (
    <div className={styles.mainDiv}>
        {/*<Filler/>*/}
        <div className={styles.welcomeDiv}>
            <div className={styles.rectangle41}>
                <img className={styles.logoTxt} src={logo} alt=""/>
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
                <div className={styles.ellipse5}/>
                <div className={styles.ellipse4}/>
            </div>
        </div>
    </div>
);

export default MainPage;