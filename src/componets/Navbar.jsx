import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <Nav>
      {/* left navbar */}
      <div className="title">
        <h4>Hi Abenezer Kifle</h4>
        <h1>
          Welcome to <span>CBE File Management System</span>
        </h1>
      </div>
      {/* right navabr */}
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
display:flex;
justify-content: space-between;
color: white;
.title{
    h1 {
        span{
            margin-left: 0.5rem;
             color: #ffc107;
             letter-spacing: 0.2rem;
             font-family: "Permanent Marker", cursive;
        }
    }
}
`;
