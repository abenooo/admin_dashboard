import React from "react";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import styled from "styled-components";
import Analytics from "./Analytics";

export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row_one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row_two">
          {/* <Earning /> */}
          {/* <Trasfer /> */}
          {/* <Profile/> */}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;
`;
