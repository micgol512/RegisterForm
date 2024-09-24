import { useState } from "react";
import StyledButton from "./StyledButton";

const AddCV = ({ register, errors, setValue }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue("cv", URL.createObjectURL(file));
  };
  return (
    <>
      <div className="header-neon">Dodaj CV</div>
      <div className="element-wrapper relative">
        <label htmlFor="cvs" className="mb-0">
          Załącz swoje CV w formie zdjęcia.
        </label>
        <input
          {...register("cv")}
          type="file"
          name="cv"
          id="cv"
          accept=".jpg,.JPG,.png,.PNG"
          // required
          form="register-form"
          className="text-gray-500 hidden"
          onChange={handleFileChange}
        />
        <StyledButton onClick={() => document.getElementById("cv").click()} className="">
          Doddaj CV
        </StyledButton>
        {errors?.cv && (
          <p className="absolute text-left left-2 top-[72px] text-[red] text-[10px] w-full m-0 p-0 ">
            {errors.cv?.message}
          </p>
        )}
      </div>
    </>
  );
};
export default AddCV;
