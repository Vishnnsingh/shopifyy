import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import Style from "../Register/Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={Style.registerContainer}>
      <div className={Style.registerForm}>
        <h1 className={Style.title}>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <label className={Style.label}>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            className={Style.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className={Style.label}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={Style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={Style.label}>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={Style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={Style.errorMessage}>{error}</p>}

          <button type="submit" className={Style.registerBtn}>REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
