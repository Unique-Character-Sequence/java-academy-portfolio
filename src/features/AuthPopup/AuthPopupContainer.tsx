import { useEffect, useRef, useState } from "react";
import "./styles/AuthPopup.sass"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { submitSignIn } from "../MainPage/MainPageSlice";
import AuthPopup from "./AuthPopup";
import { setShouldFade } from "./AuthPopupSlice";
import { toast } from "react-toastify";

const AuthPopupContainer = () => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()
    const errorSelector = useAppSelector((state) => state.mainPage.error)
    const userSelector = useAppSelector((state) => state.mainPage.user)
    const shouldFade = useAppSelector((state) => state.authPopup.shouldFade)

    const handleClickOutside = (event: MouseEvent) => {
        if (shouldFade && modalRef.current && !modalRef.current.contains(event.target as Node)) {
            dispatch(setShouldFade(false))
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
    }, [shouldFade])

    useEffect(() => {
        if (!!userSelector && userSelector.email && !errorSelector) {
            toast.success(`You have successfully logged in as ${userSelector.email}`)
        }
        if (!!errorSelector ) {
            toast.warn(`${errorSelector}`)
        }
    }, [userSelector, errorSelector])

    //TODO: React Formik для работы с формами
    return (
        <AuthPopup
            handleSubmit={handleSubmit}
            shouldFade={shouldFade}
            modalRef={modalRef}
            emailRef={emailRef}
            passwordRef={passwordRef}
        />
    );
};

export default AuthPopupContainer;