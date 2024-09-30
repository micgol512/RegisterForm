import ErrorMessage from "./ErrorMessage";
import StyledHeader from "./StyledHeader";
import StyledRadio from "./StyledRadio";
import Wrapper from "./Wrapper";
import styles from "./styles/CoursePreferences.module.css";

const CoursePreferences = ({ register, errors }) => {
  const handleChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    // console.log("Zaznaczone Values:", selectedValues);
  };
  return (
    <>
      <StyledHeader>Preferencje Kursu</StyledHeader>
      <Wrapper>
        <Wrapper flow="row">
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
          // onChange={handleChange}
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

{
  /* <div className="flex flex-row flex-nowrap text-sm">
<div>Wybierz formę nauki:</div>
<input type="radio" name="learning-type" id="static-learning" value="static" />
<label htmlFor="learning-type">Stacjonarna</label>
<input type="radio" name="learning-type" id="remote-learning" value="remote" />
<label htmlFor="learning-type">Zdalna</label>
</div> */
}

{
  /* <label className="inline-flex items-center cursor-pointer">
<input
  type="radio"
  name="learning-type"
  value="static"
  className="peer hidden"
/>
<span className="w-4 h-4 mr-2 border-2 border-gray-500 rounded-full peer-checked:bg-blue-500 flex items-center justify-center">
  <span className="w-2 h-2 bg-transparent rounded-full peer-checked:bg-blue-500"></span>
</span>
Stacjonarna
</label>
<label className="inline-flex items-center cursor-pointer">
<input
  type="radio"
  name="learning-type"
  value="remote"
  className="peer hidden"
/>
<span className="w-4 h-4 mr-2 border-2 border-gray-500 rounded-full peer-checked:bg-blue-500  flex items-center justify-center">
  <span className="w-2 h-2 bg-transparent rounded-full peer-checked:bg-blue-500"></span>
</span>
Zdalna
</label> */
}
