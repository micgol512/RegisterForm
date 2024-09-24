const ResultPage = ({ user }) => {
  return (
    <>
      <div className="flex flex-col items-stretch justify-stretch gap-1 p-1 rounded-lg w-[370px] border-double border-gray-700 border-2">
        <div className="header-neon">Dane osobowe:</div>
        <div className="element-wrapper gap-0">
          <div>
            <span>Imie: </span>
            <span>{user.firstName}</span>
          </div>
          <div>
            <span>Nazwisko: </span>
            <span>{user.lastName}</span>
          </div>{" "}
          <div>
            <span>E-mail: </span>
            <span>{user.email}</span>
          </div>
          <div>
            <span>Telefon: </span>
            <span>{user.phone.replace(/(\d{3})(?=\d)/g, "$1 ").trim()}</span>
          </div>
        </div>
        {user.devExpCheckbox && (
          <>
            <div className="header-neon">Doświadczenie:</div>
            <div className="element-wrapper pl-8">
              <ul className="list-disc">
                {user.devExp.map((exp) => (
                  <li key={`exp${exp.id}`}>
                    {exp.language}, poziom: {exp.level}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className="header-neon">Preferencje kursu:</div>
        <div className="element-wrapper gap-0">
          <div>
            <span>Typ kursu: </span>
            <span>{user.typeLearning === "static" ? "Stacjonarnie" : "Online"}</span>
          </div>{" "}
          <div>
            <span>Preferowane technologie:</span>
            <div className="element-wrapper pl-8">
              {" "}
              <ul className="list-disc">
                {user.cursePref.map((tech, index) => (
                  <li key={`tech${index}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="header-neon">Curiculum-vitae:</div>
        <div className="element-wrapper gap-0">
          <img src={user.cv} alt="curiculum-vitae" width={"150px"} />
        </div>
      </div>
    </>
  );
};
export default ResultPage;
