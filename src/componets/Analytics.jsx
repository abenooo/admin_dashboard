import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
        <div className="content">
          <h5>Category</h5>
          <h2>682</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Number of Archive</h5>
          <h2>5350</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5> Number of User</h5>
          <h2>31</h2>
        </div>
      </div>
      <div className="analytic ">
      <div className="logo">
          <FiActivity />
        </div>
        <div className="content">
          <h5>Other</h5>
          <h2>0000</h2>
        </div>

      </div>
    </Section>
  );
}

const Section = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
.analytic {
  ${cardStyle};
  padding: 1rem;
}
`;
