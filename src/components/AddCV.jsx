import { useState } from "react";
import { StyledHeader, StyledButton, ErrorMessage, Wrapper } from "./";
import styles from "./styles/AddCV.module.css";

const AddCV = ({ register, errors, setValue, clearErrors }) => {
  const [file, setFile] = useState({});
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setValue("cv", selectedFile);
    clearErrors("cv");
  };
  return (
    <>
      <StyledHeader>Dodaj CV</StyledHeader>
      <Wrapper>
        <label htmlFor="cv" className={styles.label}>
          Załącz swoje CV w formie zdjęcia.
        </label>
        <input
          {...register("cv")}
          type="file"
          name="cv"
          id="cv"
          accept=".jpg,.JPG,.png,.PNG"
          required
          form="register-form"
          className={styles.hidden}
          onChange={handleFileChange}
        />
        <Wrapper flexDirection="row">
          <StyledButton onClick={() => document.getElementById("cv").click()}>
            Doddaj CV
          </StyledButton>
          <span className={styles.info}>
            {file?.name ? `Wybrano : "${file.name}"` : "Nie wybrano pliku..."}
          </span>
        </Wrapper>
        {errors?.cv && <ErrorMessage>{errors.cv?.message}</ErrorMessage>}
      </Wrapper>
    </>
  );
};
export default AddCV;
