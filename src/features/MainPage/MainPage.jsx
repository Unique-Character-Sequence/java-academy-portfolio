import React from 'react';
import styles from "./MainPage.module.css"
import Filler from "./Filler";
import logo from "./assets/logo-txt(x2).png"

const MainPage = props => (
    <div className={styles.mainDiv}>
        {/*<Filler/>*/}
        <div className = {styles.rectangle41}>
            <img className={styles.logoTxt} src={logo} alt=""/>
        </div>
        <div className={styles.ellipse4}/>
        <div className={styles.ellipse5}/>
    </div>
);

export default MainPage;