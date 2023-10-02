import { useState } from "react";
import instance from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    try {
      const response = await instance.post("/api/register", {
        name,
        password,
      });

      console.log(response.data);
      if (response.data.status === "ok") {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <h1> Register here</h1>
        <form onSubmit={registerUser}>
          <input
            value={name}
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            value={password}
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

export default Register;
