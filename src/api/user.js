import { useState, useRef, useContext, useEffect } from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
const LOGIN_URL = "/user/login";

export function LoginSubmit() {
  const { setAuth } = useContext(AuthContext);

  // const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
    console.log("user");
  }, []);

  useEffect(() => {
    setErr("");
  }, [username, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ username, password }), {
        headers: { "Content-Type": "application/json" },
        //withCredentials : true
      });
      // console.log(response);
      setUsername("");
      setPassword("");
      setAuth({ username, password });
      setSuccess(true);

      console.log(JSON.stringify(response?.data));
    } catch (err) {
      if (!err?.response) {
        setErr("No Server Response");
      } else if (err.response?.status === 400) {
        setErr("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErr("Unauthorized");
      } else {
        setErr("Login Failed");
      }
    }

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
}
