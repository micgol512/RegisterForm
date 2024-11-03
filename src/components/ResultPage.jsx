import { StyledHeader, Wrapper } from "./";
import styles from "./styles/ResultPage.module.css";

const ResultPage = ({ user }) => {
  return (
    <div className={styles.result}>
      <StyledHeader>Dane osobowe:</StyledHeader>
      <Wrapper>
        <Wrapper flexDirection="row" justifyContent="start">
          <span className={styles.bold}>Imie: </span>
          <span>{user.firstName}</span>
        </Wrapper>
        <Wrapper flexDirection="row" justifyContent="start">
          <span className={styles.bold}>Nazwisko: </span>
          <span>{user.lastName}</span>
        </Wrapper>
        <Wrapper flexDirection="row" justifyContent="start">
          <span className={styles.bold}>E-mail: </span>
          <span>{user.email}</span>
        </Wrapper>
        <Wrapper flexDirection="row" justifyContent="start">
          <span className={styles.bold}>Telefon: </span>
          <span>{user.phone.replace(/(\d{3})(?=\d)/g, "$1 ").trim()}</span>
        </Wrapper>
      </Wrapper>
      {user.devExpCheckbox && (
        <>
          <StyledHeader>Doświadczenie:</StyledHeader>
          <Wrapper>
            <ul className="list-disc">
              {user.devExp.map((exp) => (
                <li key={`exp${exp.id}`}>
                  <span className={styles.bold}>{exp.language}</span>, poziom: {exp.level}
                </li>
              ))}
            </ul>
          </Wrapper>
        </>
      )}
      <StyledHeader>Preferencje kursu:</StyledHeader>
      <Wrapper>
        <Wrapper flexDirection="row" justifyContent="start">
          <span className={styles.bold}>Typ kursu: </span>
          <span>{user.typeLearning === "static" ? "Stacjonarnie" : "Online"}</span>
        </Wrapper>
        <Wrapper flexDirection="row" justifyContent="start">
          <span className={styles.bold}>Preferowane technologie:</span>
          <ul className="list-disc">
            {user.cursePref.map((tech, index) => (
              <li key={`tech${index}`}>{tech}</li>
            ))}
          </ul>
        </Wrapper>
      </Wrapper>
      <StyledHeader>Curiculum-vitae:</StyledHeader>
      <Wrapper>
        <img
          className={styles.image}
          src={URL.createObjectURL(user.cv)}
          alt="curiculum-vitae"
          width={"150px"}
        />
      </Wrapper>
    </div>
  );
};
export default ResultPage;
