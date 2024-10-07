import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import {
  StyledButton,
  AddDevExperience,
  ErrorMessage,
  StyledHeader,
  Wrapper,
} from "./index.js";
import styles from "./styles/DevExperience.module.css";

const initialAddDevExp = {
  id: "",
  language: "",
  level: "",
};

const DevExperience = ({ setValue, control, register, errors }) => {
  const [isCheck, setIsCheck] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "devExp",
  });

  const toggleAdditionalExp = (e) => {
    setIsCheck(!isCheck);
    if (e.target.checked) remove();
  };
  return (
    <>
      <StyledHeader>Doświadczenie</StyledHeader>
      <Wrapper flexDirection="row">
        <label htmlFor="devExpCheckbox" className={styles.label}>
          <input
            {...register("devExpCheckbox")}
            type="checkbox"
            name="devExpCheckbox"
            id="devExpCheckbox"
            className={styles.checkbox}
            onChange={toggleAdditionalExp}
          />
          Posiadam doświadczenie z progamowaniem.
        </label>
      </Wrapper>
      {isCheck && (
        <>
          <Wrapper>
            <StyledButton
              backgroundColor={"#2feb00"}
              onClick={() => append(initialAddDevExp)}
            >
              Dodaj doświadczene
            </StyledButton>
            {errors?.devExp && <ErrorMessage>{errors?.devExp?.message}</ErrorMessage>}
          </Wrapper>
          {fields.length >= 1 && (
            <Wrapper>
              {fields.map((field, index) => {
                setValue(`devExp.${index}.id`, field.id);
                return (
                  <AddDevExperience
                    key={field.id}
                    register={register}
                    onClick={() => remove(index)}
                    index={index}
                    setValue={setValue}
                    field={field}
                    errors={errors}
                  />
                );
              })}
            </Wrapper>
          )}
        </>
      )}
    </>
  );
};
export default DevExperience;
