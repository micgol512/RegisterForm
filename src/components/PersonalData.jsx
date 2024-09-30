import StyledHeader from "./StyledHeader";
import InputField from "./InputField";
import Wrapper from "./Wrapper";
const PersonalData = ({ register, errors }) => {
  return (
    <>
      <StyledHeader>Dane Osobowe</StyledHeader>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};
export default PersonalData;
