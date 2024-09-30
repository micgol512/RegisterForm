import { useState } from "react";
import StyledButton from "./StyledButton";
import ErrorMessage from "./ErrorMessage";
import Wrapper from "./Wrapper";
import styles from "./styles/AddCV.module.css";
import StyledHeader from "./StyledHeader";
const AddCV = ({ register, errors, setValue, clearErrors, setError }) => {
  const [file, setFile] = useState({});

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setValue("imageCV", URL.createObjectURL(e.target.files[0]));
      clearErrors("cv");
    } else {
      setValue("imageCV", "");
      setError("cv", { message: "Wybierz plik z CV CHANGE", type: "custom" });
    }
  };
  return (
    <>
      <StyledHeader className="header-neon">Dodaj CV</StyledHeader>
      <Wrapper flow="relative">
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
        <Wrapper flow="row">
          <StyledButton onClick={() => document.getElementById("cv").click()}>
            Doddaj CV
          </StyledButton>
          <span className={styles.info}>
            {file?.name ? `Wybrano : "${file.name}"` : "Nie wybrano pliku..."}
          </span>
          {/* {file ? console.log("FileKomponent:", file) : console.log("Nothing happend")} */}
        </Wrapper>
        {errors?.cv && (
          <ErrorMessage position="relative" top="-10px">
            {errors.cv?.message}
          </ErrorMessage>
        )}
      </Wrapper>
    </>
  );
};
export default AddCV;
