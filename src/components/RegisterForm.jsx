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
import { useState } from "react";

const initialAddDevExp = {
  id: "",
  language: "",
  level: "",
};

const devExpSchema = z.object({
  id: z.string(),
  language: z.string().min(1, { message: "Wybierz opcję" }).optional(),
  level: z.string().min(1, { message: "Wybierz opcję" }).optional(),
});

const registerSchemaBase = z.object({
  id: z.number(),
  firstName: z
    .string()
    .min(3, "Imię jest za krótkie")
    .regex(/^[A-ZĄĆĘŁŃÓŚŹŻ]/, "Imię musi zaczynać się od wielkiej litery.")
    .regex(/^(?!.*\d)/, "Imię nie może zawierać cyfr.")
    .regex(/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+$/, "Imię nie może zawierać znaków specjalnych.")
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
      /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+$/,
      "Nazwisko nie może zawierać znaków specjalnych."
    )
    .regex(
      /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/,
      "Nazwisko może zawierać tylko jedną wielką literę na początku."
    ),
  email: z.string().email("Niepoprawny format email."),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefon same liczby")
    .length(9, "Telefon musi mieć 9 znaków"),
  typeLearning: z.string(),
  cursePref: z.array(z.string()).min(1, "Musisz wybrać co najmniej jedną opcję."),
  cv: z.string().min(1, { message: "Wybierz plik z CV" }),
  // devExp: z.array(devExpSchema),
  // // devExpCheckbox: z.boolean(),
  // devExp: z.array(devExpSchema).optional(),
  // devExp: z.array(devExpSchema).min(1, { message: "Trzeba doddać doświadczenie..." }),
});
const registerSchemaTrue = registerSchemaBase.extend({
  devExpCheckbox: z.literal(true),
  devExp: z
    .array(devExpSchema)
    .min(1, { message: "Musisz dodać co najmniej jedno doświadczenie." }),
});
const registerSchemaFalse = registerSchemaBase.extend({
  devExpCheckbox: z.literal(false),
  devExp: z.array().optional(),
});
// const finalSchema = z.union([registerSchemaFalse,registerSchemaTrue]).refine((data)=>!data.devExpCheckbox?data.devExp.)
const schema = z.union([registerSchemaTrue, registerSchemaFalse]);

/////////////////////////////////////

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
    cv: z.string().min(1, { message: "Wybierz plik z CV" }),
    devExpCheckbox: z.boolean(),
    devExp: z.array(devExpSchema).optional(),
  })
  .refine((data) => !data.devExpCheckbox || (data.devExp && data.devExp.length > 0), {
    path: ["devExp"],
    message: "Musisz dodać co najmniej jedno doświadczenie.",
  });

/////////////////////////////////////
const RegisterForm = ({ setUsers, amountUsers }) => {
  const [isExpCheck, setIsExpCheck] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
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
      cv: "",
      devExpCheckbox: false,
      devExp: [],
    },
  });
  const onSubmit = (data) => {
    //   data.preventDefault();
    // console.log("Dane z EVENTU:", e.target);
    console.log(data);

    setUsers([data]);
    // setUsers((prev) => [...prev, data]);
    reset();
  };
  return (
    <>
      <form
        id="register-form"
        // onSubmit={onSubmit}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-stretch justify-stretch gap-1 p-1 rounded-lg w-[370px] border-double border-gray-700 border-2"
      >
        <PersonalData register={register} errors={errors} />
        <CoursePreferences register={register} errors={errors} />
        <AddCV register={register} errors={errors} setValue={setValue} />
        <DevExperience
          register={register}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <StyledButton type="submit">Wyślij</StyledButton>
      </form>
      {/* <button type="button" onClick={}></button> */}
      <button onClick={() => console.log("Errors: ", errors)} type="button">
        Pokaż błędy
      </button>
    </>
  );
};
export default RegisterForm;
