import { useState } from "react";
import "./App.css";
import axios from "axios";
import instance from "./api/api";

function App() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  // async function registerUser(event) {
  //   event.preventDefault();
  //   const response = await instance
  //     .post("/api/register", {
  //       name,
  //       password,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log("Error: ", error));

  //   const d = await response;
  //   console.log(d);
  // }

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
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
