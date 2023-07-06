import "./styles/AuthPopup.sass"
import logo from "../../assets/logo-txt-gray.png"
import { Fade } from "@mui/material";

type AuthPopupProps = {
    handleSubmit: (email: string, password: string) => void;
    shouldFade: boolean;
    modalRef: React.RefObject<HTMLDivElement>;
    emailRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
}

const AuthPopup = (props: AuthPopupProps) => {
    const handleTestCredentialsClick = () => {
        props.emailRef.current.value = "pihole8194@tinydef.com";
        props.passwordRef.current.value = "AyWxJiR7nqUULCh";

    };
    //TODO: React Formik для работы с формами
    return (
        <Fade in={props.shouldFade}>
            <div className="modalSpace">
                <div className="authModalForm" ref={props.modalRef}>
                    <div id="signInButton" className="googleAuthBtn" />
                    <div className="signIn_frame" />
                    <img className="logoImg" src={logo} alt="Logo" />
                    <span className="spanSignInWord">Вход</span>
                    <input className="inputField_email" ref={props.emailRef} name="email" type="text" placeholder="Ваш email" />
                    <input className="inputField_password" ref={props.passwordRef} name="password" type="password" placeholder="Пароль" />
                    <div className="testCredentialsSpanContainer">
                        <span className="testCredentialsSpan1">Test Credentials:</span>
                        <span className="testCredentialsSpan2"
                            onClick={handleTestCredentialsClick}>
                            pihole8194@tinydef.com:AyWxJiR7nqUULCh</span>
                    </div>
                    <span className="forgotPassword">Забыли пароль?</span>
                    <span className="registerButton">Регистрация</span>
                    <button className="signInButton"
                        onClick={() => props.handleSubmit(props.emailRef.current.value, props.passwordRef.current.value)}>
                        Войти</button>
                </div>
            </div>
        </Fade>
    );
};

export default AuthPopup;