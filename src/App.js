import React from 'react';
import styled from 'styled-components';
import Sidebar from './componets/Sidebar';
import Dashboard from './componets/Dashboard';
import Navbar from './componets/Navbar';
export default function App() {
  return (
    <Div>
    <Sidebar />
    <Dashboard />
    </Div>
  )
}

// styled componets
const Div = styled.div``;
