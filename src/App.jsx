import { useCallback, useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { ResultPage } from "./components";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      {users.length === 0 ? (
        <RegisterForm setUsers={setUsers} amountUsers={users.length} />
      ) : (
        <ResultPage user={users[0]} />
      )}
      <button onClick={() => console.log("Users:", users)}> Users</button>
    </>
  );
}

export default App;
