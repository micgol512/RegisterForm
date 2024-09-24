import StyledButton from "./StyledButton";
const AddDevExperience = ({ setValue, onClick, register, index, field, errors }) => {
  const handleChange = (e) => {
    // console.log("Przekazane id: ", field.id);
    // console.log("Przekazany index: ", index);
    // console.log("Name:: ", e.target.name);
    // console.log("Value: ", e.target.value);
    setValue(`devExp.${index}.${e.target.name}`, e.target.value);
  };

  return (
    <>
      <div className="element-wrapper flex-row w-full justify-between">
        <div className="relative flex flex-col w-[100%] p-0 m-0">
          <select
            className="rounded-lg cursor-pointer"
            {...register(`devExp.${index}.language`)}
            name="language"
            id={`devExp.${index}.language`}
            onChange={handleChange}
          >
            <option value="" disabled defaultChecked>
              Wybierz język
            </option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="Inne">Inne</option>
          </select>
          {errors?.devExp?.[index]?.language && (
            <p className="absolute text-left left-2 top-[23px] text-[red] text-[10px] w-full m-0 p-0 ">
              {errors?.devExp[index].language.message}
            </p>
          )}
        </div>
        <div className="relative flex flex-col w-[100%] p-0 m-0">
          <select
            className="rounded-lg cursor-pointer"
            {...register(`devExp.${index}.level`)}
            name="level"
            id={`devExp.${index}.level`}
            onChange={handleChange}
          >
            <option value="" disabled defaultChecked>
              Wybierz poziom
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors?.devExp?.[index]?.level && (
            <p className="absolute text-left left-2 top-[23px] text-[red] text-[10px] w-full m-0 p-0 ">
              {errors?.devExp[index].level.message}
            </p>
          )}
        </div>
        <StyledButton onClick={() => onClick(index)}>Usuń</StyledButton>
      </div>
    </>
  );
};
export default AddDevExperience;
