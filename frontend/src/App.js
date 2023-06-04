import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import StockState from './context/stocks/StockState';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, txt, type) => {
    setAlert({
      msg: message,
      txt: txt,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
      <StockState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} />
              <Route path='/login' element={<Login showAlert={showAlert} />} />
              <Route path='/register' element={<Signup showAlert={showAlert} />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </StockState>
    </>
  );
}

export default App;
