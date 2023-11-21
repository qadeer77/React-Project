import { React, useState } from "react";
import { db, collection, addDoc } from "../Config/FirebaseConfig";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");

  const handleAddEmployee = async () => {
    console.log("catogory===>>> ", category);
    // const employeeData = {
    //   name,
    //   email,
    //   password,
    //   salary,
    //   address,
    //   category,
    // };

    // try {
    //   const docRef = await addDoc(collection(db, "employees"), employeeData);
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };

  return (
    <div style={containerStyle}>
      <h1>Add Employee</h1>

      <div style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="name" style={labelStyle}>
            Name
          </label>
          <input
            type="text"
            id="name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            type="password"
            id="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="salary" style={labelStyle}>
            Salary
          </label>
          <input
            type="text"
            id="salary"
            style={inputStyle}
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="address" style={labelStyle}>
            Address
          </label>
          <textarea
            id="address"
            style={textareaStyle}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="category" style={labelStyle}>
            Category
          </label>
          <select
            id="category"
            style={inputStyle}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="IT">IT</option>
            <option value="Development">Development</option>
            <option value="Designing">Designing</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="image" style={labelStyle}>
            Select Image
          </label>
          <input type="file" id="image" style={inputStyle} />
        </div>

        <div style={inputContainerStyle}>
          <button
            onClick={handleAddEmployee}
            style={{
              color: "white",
              backgroundColor: "blue",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  border: "1px solid #ccc",
  padding: "100px",
  boxSizing: "border-box",
  borderRadius: "5px",
  width: "80vw",
};

const formStyle = {
  width: "300px",
  textAlign: "center",
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  textAlign: "left",
};

const labelStyle = {
  marginBottom: "8px",
};

const inputStyle = {
  padding: "8px",
  fontSize: "14px",
  width: "100%",
  borderRadius: "5px",
  boxSizing: "border-box",
  marginBottom: "8px",
};

const textareaStyle = {
  padding: "8px",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "8px",
  borderRadius: "5px",
};

export default AddEmployee;
