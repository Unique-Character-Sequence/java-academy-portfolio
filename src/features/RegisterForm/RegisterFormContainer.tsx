import React, { useRef } from 'react'
import RegisterForm from './RegisterForm'
import { useAppDispatch } from '../../app/hooks'
import { setWindowType } from '../ModalPopup/ModalPopupSlice'

const RegisterFormContainer = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const nameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const repeatPasswordRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()

    const handleSubmit = () => {
        // dispatch(submitRegisterForm({
        //     email: emailRef.current.value,
        //     name: nameRef.current.value,
        //     password: passwordRef.current.value,
        //     repeatPassword: repeatPasswordRef.current.value
        // }))
        alert("in development")
    }
    const handleSignIn = () => {
        dispatch(setWindowType("SignIn"))
    }
    return (
        <RegisterForm
            emailRef={emailRef}
            nameRef={nameRef}
            passwordRef={passwordRef}
            repeatPasswordRef={repeatPasswordRef}
            handleSignIn={handleSignIn}
            handleSubmit={handleSubmit}
        />
    )
}

export default RegisterFormContainer