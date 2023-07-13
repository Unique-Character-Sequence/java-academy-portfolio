import { Field } from "formik";

export const FieldWithValidation = ({ fieldClass, field, errors, touched, type, placeholder }: any) => {
    const hasError = errors[field] && touched[field];

    return (<>
        <Field className={hasError ? `${fieldClass}_withError` : fieldClass} name={field} type={type}
            placeholder={placeholder} />

        <span className={`errorMessage_${fieldClass}`}>
            {hasError ? errors[field] : null}
        </span>
    </>
    );
};
