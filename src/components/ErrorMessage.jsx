import styles from "./styles/ErrorMessage.module.css";
const ErrorMessage = ({ children, position, top = "-20px" }) => {
  return (
    <p style={position ? { position: position, top: top } : {}} className={styles.errors}>
      {children}
    </p>
  );
};
export default ErrorMessage;
