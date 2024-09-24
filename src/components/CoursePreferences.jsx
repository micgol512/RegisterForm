import StyledRadio from "./StyledRadio";

const CoursePreferences = ({ register, errors }) => {
  const handleChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    // console.log("Zaznaczone Values:", selectedValues);
  };
  return (
    <>
      <div className="header-neon">Preferencje Kursu</div>
      <div className="element-wrapper relative">
        <div className="text-gray-700 flex flex-row flex-nowrap gap-4 items-center text-sm">
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
        </div>
        <select
          {...register("cursePref")}
          id="chose-prefers"
          className="text-gray-300 bg-slate-500 form-multiselect block w-full px-2 py-1 border border-gray-700 rounded-lg text-sm overflow-hidden"
          multiple
          // onChange={handleChange}
        >
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="HTML">HTML</option>
          <option value="Next.js">Next.js</option>
        </select>
        {errors?.cursePref && (
          <p className="absolute text-left left-2 top-[125px] text-[red] text-[10px] w-full m-0 p-0 ">
            {errors.cursePref?.message}
          </p>
        )}
      </div>
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
