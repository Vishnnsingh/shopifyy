import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/firebase"; // Import Firebase authentication
import { signInWithEmailAndPassword } from "firebase/auth";
import style from "../Login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/home"); // Redirect to home page on successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={style.logincontainer}>
      <div className={style.loginform}>
        <h1>Welcome back to Pretty Login</h1>
        <p>It's great to have you back</p>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className={style.errorMessage}>{error}</p>}

          <div className={style.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className={style.loginbtn} type="submit">
            LOGIN
          </button>
          {/* Navigate to Register Page on Click */}
          <button
            type="button"
            className={style.createaccount}
            onClick={() => navigate("/register")}
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p>
          Or login with <span className={style.sociallogin}>Facebook Google</span>
        </p>
      </div>
      <div className={style.loginimage}></div>
    </div>
  );
};

export default Login;
