import { Fade } from "@mui/material";
import { useEffect, useRef } from "react"
import "./styles/ModalPopup.sass"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setShouldFade } from "./ModalPopupSlice";
import { toast } from "react-toastify";
import AuthPopupContainer from "../AuthPopup/AuthPopupContainer";
import logo from "../../assets/logo-txt-gray.png"

const ModalPopup = () => {
    // Local variables
    const modalRef = useRef<HTMLDivElement | null>(null)
    // Redux variables
    const windowType = useAppSelector((state) => state.modalPopup.windowType)
    const shouldFade = useAppSelector((state) => state.modalPopup.shouldFade)
    const errorSelector = useAppSelector((state) => state.mainPage.error)
    const userSelector = useAppSelector((state) => state.mainPage.user)
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
            toast.success(`You have successfully logged in as ${userSelector.email}`)
        }
        if (!!errorSelector) {
            toast.warn(`${errorSelector}`)
        }
    }, [userSelector, errorSelector])

    const componentRendered = () => {
        switch (windowType) {
            case "SignIn":
                return <AuthPopupContainer />
            case "SignUp":
                return <div>Sign Up!</div>
            case "ForgotPassword":
                return <div>Forgot Password!</div>
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