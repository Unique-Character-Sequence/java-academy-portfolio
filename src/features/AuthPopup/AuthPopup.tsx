import { useState } from "react";
import "./styles/AuthPopup.sass"
import logo from "../../assets/logo-txt_desktop.png"

const AuthPopup = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="authModalForm">
            <div id="signInButton" />
            <img src={logo} alt="Logo" />
            <span>Вход</span>
            <div />
            <input className="loginEmailField" name="email" type="text" placeholder="Ваш email" />
            <input className="loginPasswordField" name="password" type="password" placeholder="Пароль" />
            <button>Войти</button>
            <span>Забыли пароль?</span>
            <span>Регистрация</span>
        </div>
    );
};

export default AuthPopup;