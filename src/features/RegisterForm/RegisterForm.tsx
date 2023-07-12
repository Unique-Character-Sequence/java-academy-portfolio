import { Field, Form, Formik } from "formik";
import { signUpSchemaType, signUpValues } from "./signUpSchema";
import { ObjectSchema } from "yup";

interface RegisterFormProps {
    signUpSchema: ObjectSchema<signUpSchemaType>
    handleSubmit: (email: string, name: string, password: string) => void;
    handleSignIn: () => void;
}

const ErrorMessage = ({ field, classN, errors, touched }: any) => {
    return (
        <span className={classN}>
            {errors[field] && touched[field] ? errors[field] : null}
        </span>
    );
};

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
                            <Field className="inputField_1" name="email" type="text"
                                placeholder="Ваш email" />
                            <ErrorMessage classN="errorMessage_inputField_1"
                                field="email" errors={errors} touched={touched} />

                            <Field className="inputField_2" name="name" type="text"
                                placeholder="Ваше имя" />
                            <ErrorMessage classN="errorMessage_inputField_2"
                                field="name" errors={errors} touched={touched} />

                            <Field className="inputField_3" name="password" type="password"
                                placeholder="Пароль" />
                            <ErrorMessage classN="errorMessage_inputField_3"
                                field="password" errors={errors} touched={touched} />

                            <Field className="inputField_4" name="repeatPassword" type="password"
                                placeholder="Подтверждение пароля" />
                            <ErrorMessage classN="errorMessage_inputField_4"
                                field="repeatPassword" errors={errors} touched={touched} />

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