import { useState } from "react";
import { ResultPage, RegisterForm } from "./components";
import "./App.css";

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
