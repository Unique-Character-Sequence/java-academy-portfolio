import React from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import { useAppDispatch } from '../../app/hooks'
import { forgotPasswordThunk } from './forgotPasswordThunk'
import { setWindowType } from '../ModalPopup/ModalPopupSlice'
import { setDidRequestPasswordRecovery } from '../MainPage/MainPageSlice'

const ForgotPasswordFormContainer = () => {
    const dispatch = useAppDispatch()
    const submitForgotPassword = (email: string) => {
        dispatch(forgotPasswordThunk(email))
        dispatch(setDidRequestPasswordRecovery(null))
    }
    const handleSignIn = () => {
        dispatch(setWindowType("SignIn"))
    }
    return (
        <ForgotPasswordForm
            handleSignIn={handleSignIn}
            submitForgotPassword={submitForgotPassword} />
    )
}

export default ForgotPasswordFormContainer