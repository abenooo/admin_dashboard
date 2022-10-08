import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { MdNotificationsNone, MdOutlineLogout } from "react-icons/md";
export default function Notification() {
  return (
    <>
      <Section>
        <div className="grid">
          {/* button */}
          <div className="row__one">
            <div className="notification">
             
              <div>
                <MdNotificationsNone className="h-6 w-6 co" />
              </div>
              {/* <IconContext.Provider value={{ color: "white", size: "24" }}>
                <div>
                  <AiFillCaretDown />
                </div>
              </IconContext.Provider> */}
              <div>
                <AiFillCaretDown className="h-6 w-6" />
              </div>
              <div>
                <CgProfile className="h-6 w-6" />
              </div>
              <div>
                <MdOutlineLogout className="h-6 w-6" />
              </div>
              {/* <div>
                <image href="" className="h-6 w-6 b" />
              </div> */}
              <div className="content"></div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  margin-left: 16vw;
  /* margin-right: 1.5vw; */
  padding: 0.2rem;
  .grid {
    display: flex;
    flex-direction: column;
    gap: rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      /* height: 50%; */
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one {
        grid-template-columns: repeat(1, 1fr);
        margin-top: -15px;
      }
    }
  }
  .notification {
    background-color: #212121;
    border: 0px;
    height: 35px;
    /* border-radius: 5px; */
    color: white;
    margin-top: -3px;
    cursor: pointer;
    display: inline-block;
    font-family: "Permanent Marker", cursive;
    /* font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif; */
    font-size: 18px;
    font-weight: 600;
    outline: 0;
    user-select: none;
    -webkit-user-select: none;
    padding: 0.3rem;
    margin-right: 0.2rem;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
  }
`;
