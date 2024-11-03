import { Wrapper, ErrorMessage } from "./";
import styles from "./styles/InputField.module.css";
const InputField = ({ field, type = "text", register, errors, children }) => {
  return (
    <Wrapper gap="0px">
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
