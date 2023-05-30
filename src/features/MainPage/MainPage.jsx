import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./MainPage.module.css"

const MainPage = props => (
    <div className={styles.mainDiv}>
        <Box sx={{backgroundColor:"#12312312", textAlign : "center"}}>
            <Typography variant="h2">Hello World</Typography>
        </Box>
        <Box sx={{marginTop: "2vh"}}>
            <Link to="/counter">
                <Button variant="outlined">
                    <Typography variant="h6">counter</Typography>
                </Button>
            </Link>
        </Box>
    </div>
);

export default MainPage;