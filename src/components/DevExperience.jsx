import { useState } from "react";
import StyledButton from "./StyledButton";
import AddDevExperience from "./AddDevExperience";
import { useFieldArray } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import StyledHeader from "./StyledHeader";
import Wrapper from "./Wrapper";

const initialAddDevExp = {
  id: "",
  language: "",
  level: "",
};

const DevExperience = ({ setValue, control, register, errors }) => {
  const [isCheck, setIsCheck] = useState(false);
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "devExp",
  });

  const toggleAdditionalExp = (e) => {
    // console.log("Check przed:", isCheck);

    setIsCheck(!isCheck);
    // console.log("Check po:", isCheck);
    if (e.target.checked) replace([]); //albo remove();
  };
  return (
    <>
      <StyledHeader className="header-neon">Doświadczenie</StyledHeader>
      <Wrapper flex="row">
        <label
          htmlFor="devExpCheckbox"
          className="flex flex-nowrap flex-row gap-1 items-center"
        >
          <input
            {...register("devExpCheckbox")}
            type="checkbox"
            name="devExpCheckbox"
            id="devExpCheckbox"
            className="appearance-none h-4 w-4 bg-transparent border-solid border border-gray-700 rounded-full checked:bg-slate-500  checked:shadow-inner-center checked:shadow-gray-300"
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
      {/* <button
        type="button"
        className="bg-slate-500"
        onClick={() => {
          console.log("Pola: ", fields);
          console.log("Błędy: ", errors);
        }}
      >
        Pokaż pola
      </button> */}
    </>
  );
};
export default DevExperience;
