import styles from "./CounterPage.module.css";
import React from "react";

const CounterLink = ({text, href}) => (
    <a
        className={styles.counterPage_link}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {text}
    </a>
)

export default CounterLink;