import { ErrorMessage, StyledHeader, StyledRadio, Wrapper } from "./index.js";
import styles from "./styles/CoursePreferences.module.css";

const CoursePreferences = ({ register, errors }) => {
  return (
    <>
      <StyledHeader>Preferencje Kursu</StyledHeader>
      <Wrapper>
        <Wrapper flexDirection="row">
          <span>Wybierz formę nauki:</span>
          <StyledRadio
            register={register}
            name="typeLearning"
            id="static-learning"
            value="static"
          >
            Stacjonarna
          </StyledRadio>
          <StyledRadio
            register={register}
            name="typeLearning"
            id="remote-learning"
            value="remote"
            check
          >
            Zdalna
          </StyledRadio>
        </Wrapper>
        <select
          {...register("cursePref")}
          id="chose-prefers"
          className={styles.chosePref}
          multiple
        >
          <option className={styles.options} value="React">
            React
          </option>
          <option className={styles.options} value="Node.js">
            Node.js
          </option>
          <option className={styles.options} value="HTML">
            HTML
          </option>
          <option className={styles.options} value="Next.js">
            Next.js
          </option>
        </select>
        {errors?.cursePref && (
          <ErrorMessage position={"relative"}> {errors.cursePref?.message}</ErrorMessage>
        )}
      </Wrapper>
    </>
  );
};
export default CoursePreferences;
