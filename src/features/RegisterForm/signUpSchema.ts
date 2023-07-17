import { InferType, ObjectSchema, object, ref, string } from "yup";

export interface signUpValues {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
}

const REQUIRED_WARNING = "Обязательное поле";

export const signUpSchema: ObjectSchema<signUpValues> = object({
  email: string().email("Некорректный ввод email").required(REQUIRED_WARNING),
  name: string().required(REQUIRED_WARNING),
  password: string()
    .required(REQUIRED_WARNING)
    .min(6, "Минимум 6 символов")
    .max(20),
  repeatPassword: string()
    .required(REQUIRED_WARNING)
    .oneOf([ref("password"), null], "Passwords must match"),
});

export type signUpSchemaType = InferType<typeof signUpSchema>;
