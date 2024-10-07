import styles from "./styles/ErrorMessage.module.css";
const ErrorMessage = ({ children }) => {
  return <p className={styles.errors}>{children}</p>;
};
export default ErrorMessage;
