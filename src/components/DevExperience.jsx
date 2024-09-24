import { useState } from "react";
import StyledButton from "./StyledButton";
import AddDevExperience from "./AddDevExperience";
import { useFieldArray } from "react-hook-form";

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
      <div className="header-neon">Doświadczenie</div>
      <div className="element-wrapper flex-row">
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
      </div>
      {isCheck && (
        <>
          <StyledButton onClick={() => append(initialAddDevExp)}>
            Dodaj doświadczene
          </StyledButton>
          {errors?.devExp && (
            <p className=" text-left left-2 top-[23px] text-[red] text-[10px] w-full m-0 p-0 ">
              {errors?.devExp?.message}
            </p>
          )}
          {fields.length >= 1 && (
            <div className="bg-gray-800 mt-[-4px] pt-2 rounded-lg">
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
            </div>
          )}
        </>
      )}
      <button
        type="button"
        className="bg-slate-500"
        onClick={() => {
          console.log("Pola: ", fields);
          console.log("Błędy: ", errors);
        }}
      >
        Pokaż pola
      </button>
    </>
  );
};
export default DevExperience;
