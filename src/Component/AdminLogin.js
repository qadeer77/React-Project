import { React, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate  } from 'react-router-dom';


function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
      });
      return;
    }

    else if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 8 characters",
      });
      return;
    }

    if (email === "admin@gmail.com" && password === "12345678") {
        setEmailError("");
        setPasswordError("");
        navigate('/home');
        console.log("Login successful. Email:", email, "Password:", password);
      }

    setEmailError("");
    setPasswordError("");

    console.log("Email:", email, "Password:", password);
  };

  return (
    <div style={styles.centerContainer}>
      <h2 style={styles.heading}>Sign in to Admin</h2>
      <p style={styles.paragraph}>Enter your details below</p>

      <div style={styles.userInfoContainer}>
        <span>
          Use email: <strong>admin@gmail.com</strong> / password:{" "}
          <strong>12345678</strong>
        </span>
      </div>

      <form style={styles.login} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  heading: {
    margin: "0 0 0 0",
    fontFamily: "'Public Sans', sans-serif",
  },
  paragraph: {
    // margin: "0",
    fontFamily: "'Public Sans', sans-serif",
  },
  userInfoContainer: {
    margin: "15px 0",
    padding: "15px",
    backgroundColor: "rgb(208, 242, 255)",
    color: "rgb(4, 41, 122)",
    borderRadius: "7px",
    width: "30vw",
    fontFamily: "'Public Sans', sans-serif",
  },
  login: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "8px 0",
    padding: "15px",
    width: "30vw",
    borderRadius: "7px",
    border: "1px solid gray",
    fontFamily: "'Public Sans', sans-serif",
  },
  button: {
    margin: "16px 0",
    padding: "15px",
    cursor: "pointer",
    backgroundColor: "rgb(253, 169, 45)",
    border: "none",
    borderRadius: "7px",
    width: "100%",
    fontFamily: "'Public Sans', sans-serif",
  },
};

export default AdminLogin;
