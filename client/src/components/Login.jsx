import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await instance.post("/api/login", {
        name,
        password,
      });

      console.log(response.data);
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
            // value={password}
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
