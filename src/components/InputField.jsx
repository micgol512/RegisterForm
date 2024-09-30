import ErrorMessage from "./ErrorMessage";
import styles from "./styles/InputField.module.css";
import Wrapper from "./Wrapper";

const InputField = ({ field, type = "text", register, errors, children }) => {
  return (
    <Wrapper>
      <input
        className={errors?.[field] ? styles.inputError : styles.input}
        {...register(field)}
        type={type}
        placeholder={children}
      />
      {errors?.[field] && <ErrorMessage>{errors[field]?.message}</ErrorMessage>}
    </Wrapper>
  );
};
export default InputField;
