import { useState } from "react";
import "./styles/AuthPopup.sass"

const AuthPopup = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="authModalForm">
            <img src="../MainPage/assets/logo-txt_desktop.png" alt="Logo" />
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