import React from "react";
import styled from "styled-components";
import Sidebar from "./componets/Sidebar";
import Dashboard from "./componets/Dashboard";
import AddCategory from "./componets/Category/AddCategory";
import ListCategory from "./componets/Category/ListCategory";
import AddUser from "./componets/User/AddUser";
import ListUser from "./componets/User/ListUser";
import AddArchive from "./componets/Archive/AddArchive";
import ListArchive from "./componets/Archive/ListArchive";
import { Routes, Route } from "react-router-dom";
import NotFound from "./componets/404";
import Notification from "./componets/Notification";
export default function App() {
  return (
    <Div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Notification />
              <Dashboard />
            </>
          }
        />
        <Route path="addCategory" element={<AddCategory />} />
        <Route
          path="listCategory"
          element={
            <>
              <Sidebar />
              <Notification />
              <ListCategory />
            </>
          }
        />
        <Route path="addUser" element={<AddUser />} />
        <Route
          path="listUser"
          element={
            <>
              <Sidebar />
              <Notification />
              <ListUser />
            </>
          }
        ></Route>
        <Route
          path="addArchive"
          element={
            <>
              <AddArchive />
            </>
          }
        />
        <Route
          path="listArchive"
          element={
            <>
              <Sidebar />
              <Notification />
              <ListArchive />
            </>
          }
        />
        {/* not found page */}
        <Route path="*" element={<NotFound />} />
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
