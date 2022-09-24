import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function Card() {
  return (
    <Section>
      {/* card one */}
      <div className="analytic ">
        <div className="content">
          <h5>Number of Archive</h5>
          <h2>682</h2>
          <a className="view-all" href="#">
            View all <HiArrowNarrowRight />
          </a>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      {/* card two */}
      <div className="analytic">
      
        <div className="content">
          <h5>Category</h5>
          <h2>350</h2>
          <a className="view-all" href="#">
            View all <HiArrowNarrowRight />
          </a>
        </div>
        <div className="logo">
          <IoStatsChart />
        </div>
      </div>
      {/* card three */}
      <div className="analytic">
      
        <div className="content">
          <h5>Number of Users</h5>
          <h2>321</h2>
          <a className="view-all" href="#">
            View all <HiArrowNarrowRight />
          </a>
        </div>
        <div className="logo">
          <BiGroup />
        </div>
      </div>
      {/* card four */}
      <div className="analytic ">
        <div className="content">
          <h5>Activity</h5>
          <h2>000</h2>
          <a className="view-all" href="#">
            View all <HiArrowNarrowRight />
          </a>
        </div>
        <div className="logo">
          <FiActivity />
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
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
      .view-all{
        color: black;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      font-size: 1.5rem;
    }
    .view-all {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      text-decoration: none;
      color: #ffc107;
      font-weight: bold;
      margin-top: 1rem;
      gap: 0.5rem;
      &:hover{
        color: black;
      }
      svg {
        transition: 0.3s ease-in-out;
        font-size: 1.4rem;
      }
      &:hover {
        svg {
          transform: translateX(0.5rem);
          color: black;
        }
      }
    }
  }
`;
