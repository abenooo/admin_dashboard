import React from "react";
import styled from "styled-components";
import { Link } from "react-router-link";
// import Card from "./Card";
export default function NotFound() {
  return (
    <Section>
      {/* card one */}
      <div className="analytic ">
        <div className="content">
          <h5> Page is not found</h5>
          <Link to='/' >
           Go to dashboard
          </Link>
        </div>
        <div className="logo">
      
        </div>
      </div>
      
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin: auto;
  .analytic {
    padding: 1rem;
    display: flex;
    color: wheat;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;

  }
`;