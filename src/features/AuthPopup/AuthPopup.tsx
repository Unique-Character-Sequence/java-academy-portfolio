import { useState } from "react";
import "./styles/AuthPopup.sass"
import logo from "../../assets/logo-txt-gray.png"
import { Fade } from "@mui/material";

type AuthPopupProps = {
    handleClose: () => void;
    shouldFade: boolean;
}

const AuthPopup = (props: AuthPopupProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Fade in={props.shouldFade}>
            <div className="authModalForm">
                <div id="signInButton" />
                <div className="signIn_frame" />
                <img className="logoImg" src={logo} alt="Logo" />
                <span className="spanSignInWord">Вход</span>
                <input className="inputField_email" name="email" type="text" placeholder="Ваш email" />
                <input className="inputField_password" name="password" type="password" placeholder="Пароль" />
                <span className="forgotPassword">Забыли пароль?</span>
                <span className="registerButton">Регистрация</span>
                <button className="signInButton">Войти</button>
            </div>
        </Fade>
    );
};

export default AuthPopup;