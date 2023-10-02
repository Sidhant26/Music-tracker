import { useState } from "react";
import instance from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await instance.post("/api/login", {
        name,
        password,
      });

      console.log(response.data);
      if (response.data.user) {
        localStorage.setItem("token", response.data.user);
        alert("Login successful");
        navigate("/home");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <h1> Login here</h1>
        <form onSubmit={loginUser}>
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
          <input type="submit" value="login" />
        </form>
      </div>
    </>
  );
}

export default Login;
