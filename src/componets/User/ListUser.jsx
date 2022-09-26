import React from 'react'
import styled from "styled-components";
import { buttonStyles } from "../../componets/ReusableStyles";
import { AiOutlinePlus } from "react-icons/ai";
export default function ListUser() {
  return (
    <Section>
    <div className="grid">
      {/* button */}
      <div className="row__one">
        <div className="add__button">
          <div>
            <AiOutlinePlus />
          </div>
          <div className="content">
            <h5>Add User</h5>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="row__two"></div>
    </div>
  </Section>
  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      height: 50%;
      background-color: wheat;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one {
        grid-template-columns: repeat(2, 1fr);
      }
      .row__two {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  .add__button {
    ${buttonStyles};
    padding: 0.3rem;
    margin-top: 0.3rem;
    margin-right: 0.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
  }
`;