/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import RegisterScreen from './pages/Register';
import Navbar from './components/Navbar';
import DeleteScreen from './pages/delete/DeleteScreen';

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="AppContainer">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={!isAuthenticated ? <Login /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/delete" element={<DeleteScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
