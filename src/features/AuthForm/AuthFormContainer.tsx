import { useAppDispatch } from "../../app/hooks";
import AuthForm from "./AuthForm";
import { setWindowType } from "../ModalPopup/ModalPopupSlice";
import { submitSignIn } from "./sumbitSignInThunk";
import { signInSchema } from "./signInSchema";

const AuthFormContainer = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = (email: string, password:string) => {
        dispatch(submitSignIn({ email, password }))
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
            signInSchema={signInSchema}
            handleSubmit={handleSubmit}
            handleRegisterClick={handleRegisterClick}
            handleForgotPasswordClick={handleForgotPasswordClick}
        />
    );
};

export default AuthFormContainer;