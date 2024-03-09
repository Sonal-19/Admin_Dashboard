import React from "react";
import {Routes, Route } from 'react-router-dom';
import Signup from "./component/Pages/Auth/Signup";
import Login from "./component/Pages/Auth/Login";
import Forget from "./component/Pages/Auth/Forget";
import Navbar from "./component/layout/Navbar";
import Sidebar from "./component/layout/Sidebar";
import MainContent from "./component/layout/MainContent";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
          <Route
            path="/Admin_Dashboard"
            element={
              <>
                <Navbar />
                <div className="contain row container-fluid">
                  <Sidebar />
                  <MainContent />
                </div>
              </>
            }
          />
        </Routes>
      </div>
  );
}

export default App;
