import { Fade } from "@mui/material";
import { useEffect, useRef } from "react"
import "./styles/ModalPopup.sass"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setShouldFade } from "./ModalPopupSlice";
import { toast } from "react-toastify";
import AuthFormContainer from "../AuthForm/AuthFormContainer";
import logo from "../../assets/logo-txt-gray.png"
import RegisterFormContainer from "../RegisterForm/RegisterFormContainer";
import ForgotPasswordFormContainer from "../ForgotPasswordForm/ForgotPasswordFormContainer";

const ModalPopup = () => {
    // Local variables
    const modalRef = useRef<HTMLDivElement | null>(null)
    // Redux variables
    const windowType = useAppSelector((state) => state.modalPopup.windowType)
    const shouldFade = useAppSelector((state) => state.modalPopup.shouldFade)
    const errorSelector = useAppSelector((state) => state.mainPage.error)
    const userSelector = useAppSelector((state) => state.mainPage.user)
    const didRegisterSelector = useAppSelector((state) => state.mainPage.didRegister)
    const didRequestPasswordRecovery = useAppSelector((state) => state.mainPage.didRequestPasswordRecovery)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Handle closing modal window
        const handleClickOutside = (event: MouseEvent) => {
            // Check if we clicked outside of modal window
            if (shouldFade && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                dispatch(setShouldFade(false))
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch, shouldFade])

    useEffect(() => {
        // Show success/error toasts for logging in 
        if (!!userSelector && userSelector.email && !errorSelector) {
            if (!didRegisterSelector) {
                toast.success(`You have successfully logged in as ${userSelector.email}`);
            } else {
                toast.success(`You have successfully registered as ${userSelector.login}`);
            }
        } else if (!!didRequestPasswordRecovery && !errorSelector) {
            toast.success(`You have sent a recovery request as ${didRequestPasswordRecovery}`);
        } else if (!!errorSelector) {
            toast.warn(`${errorSelector}`);
        }
        
    }, [userSelector, didRequestPasswordRecovery, didRegisterSelector, errorSelector])

    const componentRendered = () => {
        switch (windowType) {
            case "SignIn":
                return <AuthFormContainer />
            case "SignUp":
                return <RegisterFormContainer />
            case "ForgotPassword":
                return <ForgotPasswordFormContainer />
        }
    }

    return (
        <Fade in={shouldFade}>
            <div className="modalSpace">
                <div className="authModalForm" ref={modalRef}>
                    <img className="logoImg" src={logo} alt="Logo" />
                    {componentRendered()}
                </div>
            </div>
        </Fade>
    )
}

export default ModalPopup