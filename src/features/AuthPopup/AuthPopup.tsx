type AuthPopupProps = {
    handleSubmit: (email: string, password: string) => void;
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
        <>
            <div id="signInButton" className="googleAuthBtn" />
            <div className="signIn_frame" />
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
        </>
    );
};

export default AuthPopup;