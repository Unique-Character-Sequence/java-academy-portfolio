import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { signInSchemaType, signInValues } from "./signInSchema";

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
                            <Field
                                className="inputField_1" name="email" type="text" placeholder="Ваш email" />
                            <span className="errorMessage_inputField_1">
                                {errors.email && touched.email ? errors.email : ""}
                            </span>
                            <Field
                                className="inputField_2" name="password" type="password" placeholder="Пароль" />
                            <span className="errorMessage_inputField_2">
                                {errors.password && touched.password ? errors.password : ""}
                            </span>
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