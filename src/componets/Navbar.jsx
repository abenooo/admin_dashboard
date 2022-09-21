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
        <input type="text" placeholder="type here to search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      letter-spacing: 0.3rem;
      &::placeholder{
        font-family: "Permanent Marker", cursive;
        color: #ffc107;
      }
      &:focus{
        outline: none;
      }
    }
  }
`;
