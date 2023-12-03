import React from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Feedback' element={<Feedback />}/>
          <Route path='/Profile' element={<Profile />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
