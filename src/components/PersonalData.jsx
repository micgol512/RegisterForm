import InputField from "./InputField";
const PersonalData = ({ register, errors }) => {
  return (
    <>
      <div className="header-neon">Dane Osobowe</div>
      <div className="element-wrapper">
        <InputField field={"firstName"} register={register} errors={errors}>
          Podaj imię
        </InputField>
        <InputField field={"lastName"} register={register} errors={errors}>
          Podaj nazwisko
        </InputField>
        <InputField field={"email"} type="email" register={register} errors={errors}>
          Podaj e-mail
        </InputField>
        <InputField field={"phone"} type="tel" register={register} errors={errors}>
          Podaj numer telefonu
        </InputField>
      </div>
    </>
  );
};
export default PersonalData;
