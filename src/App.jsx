import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { ResultPage } from "./components";

function App() {
  // document.documentElement.className = "dark";
  const [users, setUsers] = useState([]);
  const [imageSrc, setImageSrc] = useState(
    "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg"
  );
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <>
      {users.length === 0 ? (
        <RegisterForm setUsers={setUsers} amountUsers={users.length} />
      ) : (
        <ResultPage user={users[0]} />
      )}
      <div className="flex row gap-5">
        <button onClick={() => console.log("Users: ", users)} type="button">
          Pokaż usera
        </button>

        <button onClick={() => setImageSrc(users[0].cv)} type="button">
          Pokaż zdjecie
        </button>
      </div>

      <img src={imageSrc} alt="name" width={"100px"} />
    </>
  );
}

export default App;
