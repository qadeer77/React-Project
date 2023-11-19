import { React, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("admin");
  const navigate = useNavigate();

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

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
    } else if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 8 characters",
      });
      return;
    }

    if (loginType === "admin" && email === "admin@gmail.com" && password === "12345678") {
      setEmail("");
      setPassword("");
      navigate("/home");
      console.log("Admin Login successful. Email:", email, "Password:", password);
    } else if (loginType === "employee") {
      navigate("/EmployeeHome");
      console.log("Employee Login successful. Email:", email, "Password:", password);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Validation",
        text: "Email does not Match",
      });
      return;
    }
  };

  return (
    <div style={styles.centerContainer}>
      <div style={styles.dropdownContainer}>
        <label htmlFor="loginType">Select Login Type: </label>
        <select
          id="loginType"
          style={styles.dropdown}
          onChange={handleLoginTypeChange}
          value={loginType}
        >
          <option value="admin">Admin Login</option>
          <option value="employee">Employee Login</option>
        </select>
      </div>

      <h2 style={styles.heading}>Sign in</h2>
      <p style={styles.paragraph}>Enter your details below</p>

      {loginType === "admin" && (
        <div style={styles.userInfoContainer}>
          <span>
            Use email: <strong>admin@gmail.com</strong> / password: <strong>12345678</strong>
          </span>
        </div>
      )}

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
  dropdownContainer: {
    margin: "15px 0",
    fontFamily: "'Public Sans', sans-serif",
  },
  dropdown: {
    margin: "8px 0",
    padding: "10px",
    borderRadius: "7px",
    fontFamily: "'Public Sans', sans-serif",
  },
};

export default AdminLogin;
