import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import { AccountService } from "./utils/AccountService";

const App = () => {
  const [Status, setStatus] = useState(false);
  useEffect(() => {
    getUserStatus();
  }, []);
  function getUserStatus() {
    setStatus(AccountService.isAuthenticated());
  }
  return (
    <div>
      {!Status ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
