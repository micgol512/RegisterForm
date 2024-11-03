import styles from "./styles/Wrapper.module.css";

const Wrapper = ({ children, flexDirection, gap, justifyContent }) => (
  <div style={{ flexDirection, gap, justifyContent }} className={styles.wrapper}>
    {children}
  </div>
);

export default Wrapper;
