import styles from "./styles/StyledHeader.module.css";

const StyledHeader = ({ children }) => <div className={styles.header}>{children}</div>;

export default StyledHeader;
