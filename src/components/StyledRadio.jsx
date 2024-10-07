import styles from "./styles/StyledRadio.module.css";
const StyledRadio = ({ register, children, name, value, id, check }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        <input
          {...register(name)}
          type="radio"
          name={name}
          id={id}
          value={value}
          defaultChecked={check}
          className={styles.radio}
        />
        {children}
      </label>
    </>
  );
};
export default StyledRadio;
