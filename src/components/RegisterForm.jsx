// import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  StyledButton,
  PersonalData,
  CoursePreferences,
  AddCV,
  DevExperience,
} from "./index";
import styles from "./styles/RegisterForm.module.css";

const devExpSchema = z.object({
  id: z.string(),
  language: z.string().min(1, { message: "Wybierz opcję" }).optional(),
  level: z.string().min(1, { message: "Wybierz opcję" }).optional(),
});

const registerSchema = z
  .object({
    id: z.number(),
    firstName: z
      .string()
      .min(3, "Imię jest za krótkie")
      .regex(/^[A-ZĄĆĘŁŃÓŚŹŻ]/, "Imię musi zaczynać się od wielkiej litery.")
      .regex(/^(?!.*\d)/, "Imię nie może zawierać cyfr.")
      .regex(
        /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+$/,
        "Imię nie może zawierać znaków specjalnych."
      )
      .regex(
        /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/,
        "Imię może zawierać tylko jedną wielką literę na początku."
      ),
    lastName: z
      .string()
      .min(2, "Nazwisko jest za krótkie.")
      .regex(/^[A-ZĄĆĘŁŃÓŚŹŻ]/, "Nazwisko musi zaczynać się od wielkiej litery.")
      .regex(/^(?!.*\d)/, "Nazwisko nie może zawierać cyfr.")
      .regex(
        /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/,
        "Nazwisko może zawierać tylko jedną wielką literę na początku."
      ),
    email: z.string().email("Niepoprawny format email."),
    phone: z
      .string()
      .regex(/^\d+$/, "Telefon powinien zawierać tylko liczby")
      .length(9, "Telefon musi mieć 9 cyfr"),
    typeLearning: z.string(),
    cursePref: z.array(z.string()).min(1, "Musisz wybrać co najmniej jedną opcję."),
    imageCV: z.string().min(1, { message: "Wybierz plik z CV IMAGE" }),
    // cv: z.object(),
    devExpCheckbox: z.boolean(),
    devExp: z.array(devExpSchema).optional(),
    cv: z
      .object({})
      .refine((obj) => Object.keys(obj).length > 0, { message: "Wybierz plik z CV OBJ" }),
  })
  .refine((data) => !data.devExpCheckbox || (data.devExp && data.devExp.length > 0), {
    path: ["devExp"],
    message: "Musisz dodać co najmniej jedno doświadczenie.",
  });

const RegisterForm = ({ setUsers, amountUsers }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
    clearErrors,
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      id: amountUsers + 1,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      typeLearning: "",
      cursePref: [],
      imageCV: "",
      devExpCheckbox: false,
      devExp: [],
      cv: {},
    },
  });
  const onSubmit = (data) => {
    //   data.preventDefault();
    setUsers([data]);
    // setUsers((prev) => [...prev, data]); //set it for array of users
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <PersonalData register={register} errors={errors} />
        <CoursePreferences register={register} errors={errors} />
        <AddCV
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          clearErrors={clearErrors}
          setError={setError}
        />
        <DevExperience
          register={register}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <StyledButton type="submit">Wyślij</StyledButton>
      </form>
      <button type="button" onClick={() => console.log("Errors:", errors)}>
        Błędy
      </button>
    </>
  );
};
export default RegisterForm;
