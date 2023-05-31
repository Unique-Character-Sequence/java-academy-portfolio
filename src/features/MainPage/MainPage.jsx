import React from 'react';
import styles from "./MainPage.module.css"
import Filler from "./Filler";
import logo from "./assets/logo-txt(x2).png"

const MainPage = () => (
    <div className={styles.mainDiv}>
        {/*<Filler/>*/}
        <div className={styles.welcomeDiv}>
            <div className={styles.rectangle41}>
                <div className={styles.rectangle16}/>
                <img className={styles.logoTxt} src={logo} alt=""/>
                <span className={styles.textBig1}>Становись</span>
                <div className={styles.javaTextPosition}>

                    <span className={styles.textBigJavaBrackets}>{"{"}</span>
                    <span className={styles.textBigJava}>Java</span>
                    <span className={styles.textBigJavaBrackets}>{"}"}</span>
                    <span>-разработчиком</span>
                </div>
            </div>
            <div className={styles.ellipse4}/>
            <div className={styles.ellipse5}/>
        </div>
    </div>
);

export default MainPage;