import RegisterForm from './RegisterForm'
import { useAppDispatch } from '../../app/hooks'
import { setWindowType } from '../ModalPopup/ModalPopupSlice'
import { signUpSchema } from './signUpSchema'
import { submitSignUpThunk } from './submitSignUpThunk'

const RegisterFormContainer = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = (email: string, name: string, password: string) => {
        dispatch(submitSignUpThunk({
            email: email,
            name: name,
            password: password
        }))
    }
    const handleSignIn = () => {
        dispatch(setWindowType("SignIn"))
    }
    return (
        <RegisterForm
            signUpSchema={signUpSchema}
            handleSignIn={handleSignIn}
            handleSubmit={handleSubmit}
        />
    )
}

export default RegisterFormContainer