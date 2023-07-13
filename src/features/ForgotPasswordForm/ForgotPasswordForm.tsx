import { Form, Formik } from "formik"
import { object, string } from "yup"
import { FieldWithValidation } from "../ModalPopup/FieldWithValidation"

interface ForgotPasswordFormProps {
    submitForgotPassword: (email: string) => void
    handleSignIn: () => void
}

const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
    return (
        <>
            <div className="topBigSpan">Забыли пароль?</div>
            <span className="rememberPasswordSmallSpan">Мы пришлем на почту инструкцию для восстановления пароля</span>
            <Formik initialValues={{ email: "" }}
                validationSchema={object({ email: string().email("Некорректный ввод email").required("Обязательное поле") })}
                onSubmit={(values) => props.submitForgotPassword(values.email)}>
                {(props) => {
                    const { touched, errors } = props
                    return (
                        <Form>
                            <FieldWithValidation fieldClass="inputField_5" type="text" field="email" errors={errors} touched={touched}
                                placeholder="Ваш email" />
                            <button className="forgotPasswordButton" type="submit">Восстановить пароль</button>
                        </Form>
                    )
                }}
            </Formik>
            <span className="rememberPasswordSpan" onClick={props.handleSignIn}>Вспомнил пароль</span>
        </>
    )
}

export default ForgotPasswordForm