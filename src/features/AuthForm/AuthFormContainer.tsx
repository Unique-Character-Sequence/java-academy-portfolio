import { useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import AuthForm from "./AuthForm";
import { setWindowType } from "../ModalPopup/ModalPopupSlice";
import { submitSignIn } from "../MainPage/sumbitSignInThunk";

const AuthFormContainer = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()

    const handleSubmit = () => {
        dispatch(submitSignIn({ email: emailRef.current.value, password: passwordRef.current.value }))
    }
    const handleRegisterClick = () => {
        dispatch(setWindowType("SignUp"))
    }
    const handleForgotPasswordClick = () => {
        dispatch(setWindowType("ForgotPassword"))
    }

    //TODO: React Formik для работы с формами
    return (
        <AuthForm
            handleSubmit={handleSubmit}
            handleRegisterClick={handleRegisterClick}
            handleForgotPasswordClick={handleForgotPasswordClick}
            emailRef={emailRef}
            passwordRef={passwordRef}
        />
    );
};

export default AuthFormContainer;