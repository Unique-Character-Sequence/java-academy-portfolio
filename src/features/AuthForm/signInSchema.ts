import { InferType, ObjectSchema, object, string } from "yup";


export interface signInValues {
    email: string;
    password: string;
}

export const signInSchema: ObjectSchema<signInValues> = object({
    email: string().email("Некорректный ввод email").required("Обязательное поле"),
    password: string().required("Обязательное поле").min(6, "Минимум 6 символов").max(20)
})

export type signInSchemaType = InferType<typeof signInSchema>