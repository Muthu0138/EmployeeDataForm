import React from "react";
import "./App.css"; 
import "./index.css";
import  LoginForm  from "./Components/LoginPage/LoginForm.jsx"
import DashBoard from "./Components/DashBoardPage/DashBoard.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/DashBoard" element={< DashBoard />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;



