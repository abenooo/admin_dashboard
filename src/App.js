import React from 'react';
import styled from 'styled-components';
import Sidebar from './componets/Sidebar';
import Dashboard from './componets/Dashboard';
export default function App() {
  return (
    <Div>
    <Sidebar />
    <Dashboard />
    </Div>
  )
}

// styled componets
const Div = styled.div`
position: relative;
`;
