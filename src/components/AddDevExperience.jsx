import { ErrorMessage, StyledButton, Wrapper } from "./index.js";
import styles from "./styles/AddDevExperience.module.css";

const AddDevExperience = ({ setValue, onClick, register, index, errors }) => {
  const handleChange = (e) => {
    setValue(`devExp.${index}.${e.target.name}`, e.target.value);
  };

  return (
    <>
      <Wrapper flexDirection="row">
        <Wrapper>
          <select
            className={styles.choseExp}
            {...register(`devExp.${index}.language`)}
            name="language"
            id={`devExp.${index}.language`}
            onChange={handleChange}
          >
            <option className={styles.options} value="" disabled defaultChecked>
              Wybierz język
            </option>
            <option className={styles.options} value="JavaScript">
              JavaScript
            </option>
            <option className={styles.options} value="Python">
              Python
            </option>
            <option className={styles.options} value="C++">
              C++
            </option>
            <option className={styles.options} value="Inne">
              Inne
            </option>
          </select>
          {errors?.devExp?.[index]?.language && (
            <ErrorMessage>{errors?.devExp[index].language.message}</ErrorMessage>
          )}
        </Wrapper>
        <Wrapper>
          <select
            className={styles.choseExp}
            {...register(`devExp.${index}.level`)}
            name="level"
            id={`devExp.${index}.level`}
            onChange={handleChange}
          >
            <option className={styles.options} value="" disabled defaultChecked>
              Wybierz poziom
            </option>
            <option className={styles.options} value="1">
              1
            </option>
            <option className={styles.options} value="2">
              2
            </option>
            <option className={styles.options} value="3">
              3
            </option>
            <option className={styles.options} value="4">
              4
            </option>
            <option className={styles.options} value="5">
              5
            </option>
          </select>
          {errors?.devExp?.[index]?.level && (
            <ErrorMessage>{errors?.devExp[index].level.message}</ErrorMessage>
          )}
        </Wrapper>
        <StyledButton backgroundColor={"#ff0505"} onClick={() => onClick(index)}>
          Usuń
        </StyledButton>
      </Wrapper>
    </>
  );
};
export default AddDevExperience;
