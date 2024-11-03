import styles from "./styles/StyledButton.module.css";
const StyledButton = ({
  onClick,
  children,
  type = "button",
  color = "black",
  backgroundColor,
}) => (
  <button
    type={type}
    onClick={onClick}
    style={{ color, backgroundColor }}
    className={styles.button}
  >
    {children}
  </button>
);

export default StyledButton;
