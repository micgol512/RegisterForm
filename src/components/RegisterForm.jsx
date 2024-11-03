import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StyledButton, PersonalData, CoursePreferences, AddCV, DevExperience } from "./";
import styles from "./styles/RegisterForm.module.css";

const devExpSchema = z.object({
  id: z.string(),
  language: z.string().min(1, { message: "Wybierz opcję" }).optional(),
  level: z.string().min(1, { message: "Wybierz opcję" }).optional(),
});

const registerSchema = z
  .object({
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
      .min(3, "Nazwisko jest za krótkie.")
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
    devExpCheckbox: z.boolean(),
    devExp: z.array(devExpSchema).optional(),
    cv: z.any().refine((file) => file instanceof File, {
      message: "Wybierz plik z CV Register",
    }),
  })
  .refine((data) => !data.devExpCheckbox || (data.devExp && data.devExp.length > 0), {
    path: ["devExp"],
    message: "Musisz dodać co najmniej jedno doświadczenie.",
  });

const RegisterForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      typeLearning: "",
      cursePref: [],
      devExpCheckbox: false,
      devExp: [],
      cv: null,
    },
  });
  const onSubmit = (data) => {
    setUser(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <PersonalData register={register} errors={errors} />
      <CoursePreferences register={register} errors={errors} />
      <AddCV
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
        clearErrors={clearErrors}
      />
      <DevExperience
        register={register}
        errors={errors}
        setValue={setValue}
        control={control}
      />
      <StyledButton type="submit">Wyślij</StyledButton>
    </form>
  );
};
export default RegisterForm;
