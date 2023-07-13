import { Form, Formik } from "formik";
import { signUpSchemaType, signUpValues } from "./signUpSchema";
import { ObjectSchema } from "yup";
import { FieldWithValidation } from "../ModalPopup/FieldWithValidation";

interface RegisterFormProps {
    signUpSchema: ObjectSchema<signUpSchemaType>
    handleSubmit: (email: string, name: string, password: string) => void;
    handleSignIn: () => void;
}

const RegisterForm = (props: RegisterFormProps) => {
    return (
        <>
            <div className="topBigSpan">Регистрация</div>
            <Formik
                initialValues={{ email: '', name: '', password: '', repeatPassword: '' }}
                validationSchema={props.signUpSchema}
                onSubmit={(values: signUpValues) => {
                    values.password === values.repeatPassword &&
                        props.handleSubmit(values.email, values.name, values.repeatPassword)
                }}>
                {(props) => {
                    const { touched, errors } = props
                    //TODO: Стилизовать выделение полей при ошибке красным
                    return (
                        <Form>
                            <FieldWithValidation fieldClass="inputField_1" type="text" field="email" errors={errors} touched={touched}
                                placeholder="Ваш email" />
                            <FieldWithValidation fieldClass="inputField_2" type="text" field="name" errors={errors} touched={touched}
                                placeholder="Ваше имя" />
                            <FieldWithValidation fieldClass="inputField_3" type="password" field="password" errors={errors} touched={touched}
                                placeholder="Пароль" />
                            <FieldWithValidation fieldClass="inputField_4" type="password" field="repeatPassword" errors={errors} touched={touched}
                                placeholder="Подтверждение пароля" />

                            <button className="signInButton" type="submit">Регистрация</button>
                        </Form>
                    )
                }}
            </Formik>
            <span className="havePasswordSpan">Уже есть пароль?</span>
            <span className="signInSpan" onClick={props.handleSignIn}>Войти</span>
        </>
    )
}

export default RegisterForm