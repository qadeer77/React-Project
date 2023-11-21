import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faPlus, faMinus, faUsers, faEnvelope, faCalendarCheck, faChartLine, faBriefcase, faCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import AddEmployee from '../SubComponent/AddEmployee';
import EmployeeList from '../SubComponent/EmployeeList';

function Home() {
  const [employee, setEmployee] = useState(false)
  const [employeeList, setEmployeeList] = useState(false)
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    setEmployee(true)
    setEmployeeList(false)
  };

  const handleEmployeeList  = () => {
    setEmployeeList(true)
    setEmployee(false)
  };

  const logoutDashBoard = () => {
    navigate('/')
  }

  return (
    <>
      <div style={styles.parentDashboard}>
        <div style={styles.sidebar}>
          <div style={styles.adminDashboard}>
            <FontAwesomeIcon icon={faUserCog} style={styles.adminIcon} />
            <span style={styles.adminText}>Code With Yousuf</span>
          </div>
          <ul style={styles.sidebarOptions}>
            <li style={styles.sidebarOption} onClick={handleAddEmployee}>
              <FontAwesomeIcon icon={faPlus} style={styles.sidebarIcon}  />
              <span style={styles.sidebarText}>Add Employee</span>
            </li>
            <li style={styles.sidebarOption} onClick={handleEmployeeList}>
              <FontAwesomeIcon icon={faMinus} style={styles.sidebarIcon} />
              <span style={styles.sidebarText}>Employee List</span>
            </li>
            <li style={styles.sidebarOption} onClick={logoutDashBoard}>
            <FontAwesomeIcon icon={faSignOutAlt} style={styles.sidebarIcon} />
            <span style={styles.sidebarText}>Logout</span>
          </li>
          </ul>
        </div>


        <div style={styles.content}>
        <div style={styles.nextToSidebar}>
          {employee && <AddEmployee/>}
          {employeeList && <EmployeeList/>}
          {" "}
        </div>
      </div>

      </div>
    </>
  );
}

const styles = {
  parentDashboard: {
    backgroundColor: 'rgb(242, 247, 247)',
    display: 'flex',
  },
  sidebar: {
    backgroundColor: '#000000',
    padding: '20px',
    width: '200px',
    height: '100vh',
  },
  adminDashboard: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    marginBottom: '20px',
    marginTop: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid white',
  },
  sidebarOptions: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
  sidebarOption: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#fff',
  },
  sidebarIcon: {
    fontSize: '16px',
    marginRight: '10px',
  },
  sidebarText: {
    color: '#ffff',
  },
  adminIcon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  adminText: {
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    // marginLeft: '300px',
    display: 'flex',
  },
  nextToSidebar: {
    marginLeft: '20px',
    display: 'flex'
  }
}

export default Home;
