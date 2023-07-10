type AuthPopupProps = {
    handleSubmit: () => void;
    handleForgotPasswordClick: () => void;
    handleRegisterClick: () => void;
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
        <>
            <div id="signInButton" className="googleAuthBtn" />
            <div className="signIn_frame" />
            <span className="topBigSpan">Вход</span>
            <input className="inputField_1" ref={props.emailRef} name="email" type="text" placeholder="Ваш email" />
            <input className="inputField_2" ref={props.passwordRef} name="password" type="password" placeholder="Пароль" />
            <div className="testCredentialsSpanContainer">
                <span className="testCredentialsSpan1">Test Credentials:</span>
                <span className="testCredentialsSpan2"
                    onClick={handleTestCredentialsClick}>
                    pihole8194@tinydef.com:AyWxJiR7nqUULCh</span>
            </div>
            <span className="forgotPassword"
                onClick={props.handleForgotPasswordClick}>
                Забыли пароль?</span>
            <span className="registerSpan"
                onClick={props.handleRegisterClick}>
                Регистрация</span>
            <button className="signInButton"
                onClick={props.handleSubmit}>
                Войти</button>
        </>
    );
};

export default AuthPopup;