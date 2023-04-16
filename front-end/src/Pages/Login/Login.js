import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/pictures/logo.png";
import { setUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

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
        console.log(response.data);
      } else {
        // toaster
      }
    } catch (error) {
      console.error("Failed to login", error);
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <img src={logo} className="mx-auto d-block w-50" alt="logo"></img>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h1>Вход</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Потребител:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
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
                  type="submit"
                  className="btn btn-primary btn-block mt-2"
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
