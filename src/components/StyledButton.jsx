const StyledButton = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={String.raw`h-auto p-1 bg-white hover:bg-slate-500 hover:text-gray-100 styled-btn ${className}`}
      >
        {children}
      </button>
    </>
  );
};
export default StyledButton;
