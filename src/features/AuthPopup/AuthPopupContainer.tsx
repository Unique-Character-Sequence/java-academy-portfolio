import { useEffect, useRef } from "react";
import "./styles/AuthPopup.sass"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setError, setUser, submitSignIn } from "../MainPage/MainPageSlice";
import AuthPopup from "./AuthPopup";

type AuthPopupContainerProps = {
    handleClose: () => void;
    shouldFade: boolean;
}

const AuthPopupContainer = (props: AuthPopupContainerProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()
    const errorSelector = useAppSelector((state) => state.mainPage.error)
    const userSelector = useAppSelector((state) => state.mainPage.user)

    const handleClickOutside = (event: MouseEvent) => {
        if (props.shouldFade && modalRef.current && !modalRef.current.contains(event.target as Node)) {
            props.handleClose();
        }
    };

    const handleSubmit = (email: string, password: string) => {
        dispatch(submitSignIn({ email, password }))
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props.shouldFade])

    useEffect(() => {
        if (!!errorSelector === true) {
            alert(`[useEffect Redux] state.mainPage.error is: \n\n${errorSelector}`)
        }
    }, [errorSelector])

    //TODO: React Formik для работы с формами
    return (
        <AuthPopup
            handleSubmit={handleSubmit}
            shouldFade={props.shouldFade}
            modalRef={modalRef}
            emailRef={emailRef}
            passwordRef={passwordRef}
        />
    );
};

export default AuthPopupContainer;