import logo from './logo.svg';
import './App.css';
import AdminLogin from './Component/AdminLogin';
import Home from './Component/Home';
import EmployeeHome from './Component/EmployeeHome';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
    <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/EmployeeHome' element={<EmployeeHome/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
