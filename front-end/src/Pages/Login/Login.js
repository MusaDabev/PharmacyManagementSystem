import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginLogo from "../../assets/pictures/login-pic.png";
import { setUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleLogin(event) {
    event.preventDefault();
    const loginCredentials = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        loginCredentials
      );
      if (response.status === 200) {
        navigate("/");
        // store user
        dispatch(setUser(response.data));
      } else {
        // toaster
      }
    } catch (error) {
      console.error("Failed to login", error);
    }
  }
  return (
    <div className={` ${styles.loginContainer}`}>
      <div className="d-flex justify-content-center align-items-end mt-2 ms-4 me-4">
        <img src={loginLogo} className="rounded mx-auto d-block w-50 me-1" alt="logo"></img>
        <div className="col-md-6">
          <div className="card">
            <div
              style={{ backgroundColor: "rgb(57, 144, 243)" }}
              className="card-header text-white text-center"
            >
              <h1>PharmaRx</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Имейл:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password">Парола:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button
                  style={{ backgroundColor: "rgb(57, 144, 243)" }}
                  type="submit"
                  className="btn btn-primary btn-lg mt-2"
                >
                  Вход
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
