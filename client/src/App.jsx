import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    await axios
      .get("http://localhost:5000/api/register")
      .then((res) => console.log(res));
  }

  return (
    <>
      <div>
        <h1> Write here</h1>
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="register" />
        </form>
      </div>
    </>
  );
}

export default App;
