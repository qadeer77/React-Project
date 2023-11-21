import React, { useEffect, useState } from 'react';
import { getDocs, collection, db } from '../Config/FirebaseConfig';

const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "employees"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setEmployeeData(data);
    };

    fetchData();
  }, [])

  return (
    <div style={styles.employeeListContainer}>
      <h1>Employee List</h1>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Address</th>
              <th style={styles.th}>Salary</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>

            {employeeData.map((employee) =>
              <tr key={employee.id}>
                <td style={styles.td}>{employee.name}</td>
                <td style={styles.td}>
                  <img src={employee.image} alt={employee.name} style={styles.image} />
                </td>
                <td style={styles.td}>{employee.email}</td>
                <td style={styles.td}>{employee.address}</td>
                <td style={styles.td}>{employee.salary}</td>
                <td style={styles.td}>
                  <button style={styles.editButton}>Edit</button>
                  <button style={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  employeeListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // height: '100vh',
    width: '80vw'
  },
  tableContainer: {
    marginTop: '20px',
  },
  table: {
    // width: '80%',
    marginTop: '20px',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '1px solid #ddd',
    padding: '30px',
    textAlign: 'left',
    // marginBottom: '10px', 
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '30px',
    textAlign: 'left',
    // marginBottom: '10px',
  },
  image: {
    maxWidth: '50px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    // borderRadius: '30px'
  },
  editButton: {
    backgroundColor: 'blue',
    color: 'white',
    marginRight: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


export default EmployeeList;
