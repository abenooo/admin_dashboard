import React from "react";
import styled from "styled-components";
import Sidebar from "./componets/Sidebar";
import Dashboard from "./componets/Dashboard";
import Profile from "./componets/Profile";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
export default function App() {
  return (
    <Div>
      <Navbar />
      <Sidebar />
      {/* <Dashboard /> */}
      {/* <Profile /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Div>
  );
}

// styled componets
const Div = styled.div`
  position: relative;
`;
