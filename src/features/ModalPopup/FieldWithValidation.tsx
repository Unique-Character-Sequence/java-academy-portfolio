import { Field } from "formik";

export const FieldWithValidation = ({ fieldClass, errorClass, field, errors, touched, type, placeholder }: any) => {
    const hasError = errors[field] && touched[field];

    return (<>
        <Field className={hasError ? `${fieldClass}_withError` : fieldClass} name={field} type={type}
            placeholder={placeholder} />

        <span className={errorClass}>
            {hasError ? errors[field] : null}
        </span>
    </>
    );
};
