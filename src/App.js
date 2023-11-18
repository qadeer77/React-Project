import logo from './logo.svg';
import './App.css';
import AdminLogin from './Component/AdminLogin';
import Home from './Component/Home';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
    <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
