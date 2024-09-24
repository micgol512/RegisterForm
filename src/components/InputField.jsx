const InputField = ({ field, type = "text", register, errors, children }) => {
  return (
    <div className="relative flex flex-col w-[100%] h-[25px] p-0 m-0">
      <input
        className="bg-slate-500 px-2 rounded-lg text-gray-100 placeholder:text-gray-400"
        {...register(field)}
        type={type}
        placeholder={children}
      />
      {errors?.[field] && (
        <p className="absolute text-left left-2 top-[23px] text-[red] text-[10px] w-full m-0 p-0 ">
          {errors[field]?.message}
        </p>
      )}
    </div>
  );
};
export default InputField;
