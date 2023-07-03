import { useEffect, useRef } from "react";
import "./styles/AuthPopup.sass"
import logo from "../../assets/logo-txt-gray.png"
import { Fade } from "@mui/material";

type AuthPopupProps = {
    handleClose: () => void;
    shouldFade: boolean;
}

const AuthPopup = (props: AuthPopupProps) => {
    const modalRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (props.shouldFade === true && modalRef.current && !modalRef.current.contains(event.target)) {
                console.log("???????")
                props.handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    });

    //TODO: React Formik для работы с формами
    return (
        <Fade in={props.shouldFade}>
            <div className="modalSpace">
                <div className="authModalForm" ref={modalRef}>
                    <div id="signInButton" className="googleAuthBtn" />
                    <div className="signIn_frame" />
                    <img className="logoImg" src={logo} alt="Logo" />
                    <span className="spanSignInWord">Вход</span>
                    <input className="inputField_email" name="email" type="text" placeholder="Ваш email" />
                    <input className="inputField_password" name="password" type="password" placeholder="Пароль" />
                    <span className="forgotPassword">Забыли пароль?</span>
                    <span className="registerButton">Регистрация</span>
                    <button className="signInButton">Войти</button>
                </div>
            </div>
        </Fade>
    );
};

export default AuthPopup;