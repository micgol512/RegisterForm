import styles from "./styles/Wrapper.module.css";
const Wrapper = ({ children, flow }) => {
  return (
    <div style={flow ? { flexDirection: flow } : {}} className={styles.wrapper}>
      {children}
    </div>
  );
};
export default Wrapper;
