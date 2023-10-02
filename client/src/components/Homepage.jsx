import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Homepage() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.clear();
      history.push("/login");
    }
  }, []);
  return <h1>Welcome to the homepage!</h1>;
}

export default Homepage;
