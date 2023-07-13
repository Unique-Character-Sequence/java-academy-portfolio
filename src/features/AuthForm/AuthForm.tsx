import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { signInSchemaType, signInValues } from "./signInSchema";
import { FieldWithValidation } from "../ModalPopup/FieldWithValidation";

type AuthPopupProps = {
    handleSubmit: (email: string, password: string) => void;
    handleForgotPasswordClick: () => void;
    handleRegisterClick: () => void;
    signInSchema: Yup.ObjectSchema<signInSchemaType>
}

const AuthPopup = (props: AuthPopupProps) => {
    //TODO: React Formik для работы с формами
    return (
        <>
            <div id="signInWithGoogleBtn" className="googleAuthBtn" />
            <span className="topBigSpan">Вход</span>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={props.signInSchema}
                onSubmit={(values: signInValues) => {
                    props.handleSubmit(values.email, values.password)
                }}
            >
                {(props) => {
                    const { touched, errors } = props
                    return (
                        <Form>
                            <FieldWithValidation fieldClass="inputField_1" type="text" field="email" errors={errors} touched={touched} 
                            placeholder="Ваш email" />
                            <FieldWithValidation fieldClass="inputField_2" type="password" field="password" errors={errors} touched={touched} 
                            placeholder="Пароль" />
                            <button className="signInButton" type="submit">Войти</button>
                        </Form>
                    )
                }}
            </Formik>
            <span className="forgotPassword"
                onClick={props.handleForgotPasswordClick}>
                Забыли пароль?</span>
            <span className="registerSpan"
                onClick={props.handleRegisterClick}>
                Регистрация</span>
        </>
    );
};

export default AuthPopup;