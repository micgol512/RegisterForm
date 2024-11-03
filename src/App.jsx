import { useState } from "react";
import { ResultPage, RegisterForm } from "./components";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      {Object.keys(user).length === 0 ? (
        <RegisterForm setUser={setUser} />
      ) : (
        <ResultPage user={user} />
      )}
    </>
  );
}
export default App;
