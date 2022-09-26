import React from "react";
import styled from "styled-components";
import Sidebar from "./componets/Sidebar";
import Dashboard from "./componets/Dashboard";
import AddCategory from "./componets/Category/AddCategory";
import ListCategory from "./componets/Category/ListCategory";
// import Profile from "./componets/Profile";
import { Routes, Route } from "react-router-dom";
import NotFound from './componets/404'
import Navbar from "./componets/Navbar";
export default function App() {
  return (
    <Div>
      {/* <Navbar /> */}
      <Sidebar />
      {/* <Dashboard /> */}
      {/* <Profile /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addCategory"  element={<AddCategory />} />
        <Route path="listCategory" element={<ListCategory />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Div>
  );
}

// styled componets
const Div = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
`;
