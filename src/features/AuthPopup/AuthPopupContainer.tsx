import { useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import { submitSignIn } from "../MainPage/MainPageSlice";
import AuthPopup from "./AuthPopup";

const AuthPopupContainer = () => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()

    const handleSubmit = (email: string, password: string) => {
        dispatch(submitSignIn({ email, password }))
    }

    //TODO: React Formik для работы с формами
    return (
        <AuthPopup
            handleSubmit={handleSubmit}
            modalRef={modalRef}
            emailRef={emailRef}
            passwordRef={passwordRef}
        />
    );
};

export default AuthPopupContainer;