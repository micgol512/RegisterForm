const StyledRadio = ({ register, children, name, value, id, check }) => {
  return (
    <>
      <label htmlFor={id} className="flex flex-nowrap flex-row gap-1 items-center">
        <input
          {...register(name)}
          type="radio"
          name={name}
          id={id}
          value={value}
          defaultChecked={check}
          className="appearance-none h-4 w-4 bg-transparent border-solid border border-gray-700 rounded-full checked:bg-slate-500  checked:shadow-inner-center checked:shadow-gray-300"
        />
        {children}
      </label>
    </>
  );
};
export default StyledRadio;
