import React from 'react';
import logo from "../../logo.svg";
import {Counter} from "./Counter";
import "./CounterPage.css"
import styles from "./CounterPage.module.css"
import CounterLink from "./CounterLink";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";


const CounterPage = () => (
    <div className={styles.counterPage}>
        <header className={styles.counterPage_header}>
            <img src={logo} className={styles.counterPage_logo} alt="logo"/>
            <Counter/>
            <Box sx={{marginTop: "2vh"}}>
                <Link to="/">
                    <Button sx={{backgroundColor: "rgba(112, 76, 182, 0.1)"}} variant="outlined">
                        <Typography variant="h5">to="/"</Typography>
                    </Button>
                </Link>
            </Box>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <CounterLink href="https://reactjs.org/" text="React"/>
              <span>, </span>
              <CounterLink href="https://redux.js.org/" text="Redux"/>
              <span>, </span>
              <CounterLink href="https://redux-toolkit.js.org/" text="Redux Toolkit"/>
              ,<span> and </span>
              <CounterLink href="https://react-redux.js.org/" text="React Redux"/>
            </span>
        </header>
    </div>
);

export default CounterPage;