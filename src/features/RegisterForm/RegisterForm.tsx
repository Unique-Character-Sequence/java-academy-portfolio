interface RegisterFormProps {
    handleSubmit: () => void;
    handleSignIn: () => void;
    emailRef: React.RefObject<HTMLInputElement>;
    nameRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
    repeatPasswordRef: React.RefObject<HTMLInputElement>;
}


const RegisterForm = (props: RegisterFormProps) => {
    return (
        <>
            <div className="topBigSpan">Регистрация</div>
            <input className="inputField_1" ref={props.emailRef} name="email" type="text"
                placeholder="Ваш email" />
            <input className="inputField_2" ref={props.nameRef} name="name" type="text"
                placeholder="Ваше имя" />
            <input className="inputField_3" ref={props.passwordRef} name="password" type="password"
                placeholder="Пароль" />
            <input className="inputField_4" ref={props.repeatPasswordRef} name="password" type="password"
                placeholder="Подтверждение пароля" />
            <span className="havePasswordSpan">Уже есть пароль?</span>
            <span className="signInSpan"
                onClick={props.handleSignIn}>
                Войти</span>
            <button className="signInButton"
                onClick={props.handleSubmit}>
                Регистрация</button>
        </>
    )
}

export default RegisterForm