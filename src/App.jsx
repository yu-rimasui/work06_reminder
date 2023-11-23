import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import ManagerPage from "./routes/ManagerPage";
import UserPage from "./routes/UserPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Manager" element={<ManagerPage />} />
        <Route path="/User" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
