import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsBank } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
export default function Sidebar() {
  // create state for the active navabar and pass dashboard as default active
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section>
        {/* top sidebar */}
        <div className="top">
          <div className="brand">
            <BsBank />
            <span>Admin</span>
          </div>
          <div className="toggle">
            <div className="links">
              <ul>
                {/* dashboard */}
                <li
                  onClick={() => setCurrentLink(1)}
                  className={currentLink === 1 ? "active" : ""}
                >
                  <a href="#">
                    <MdSpaceDashboard />
                    <span> Dashboard</span>
                  </a>
                </li>
                {/* user */}
                <li
                  onClick={() => setCurrentLink(2)}
                  className={currentLink === 2 ? "active" : ""}
                >
                  <a href="#">
                    <RiDashboard2Fill />
                    <span> Manager User</span>
                  </a>
                </li>
                {/* archive */}
                <li
                  onClick={() => setCurrentLink(3)}
                  className={currentLink === 3 ? "active" : ""}
                >
                  <a href="#">
                    <FaAddressCard />
                    <span> Manage Archive</span>
                  </a>
                </li>
                {/* category */}
                <li
                  onClick={() => setCurrentLink(4)}
                  className={currentLink === 4 ? "active" : ""}
                >
                  <a href="#">
                    <GiTwirlCenter />
                    <span> Manage Category</span>
                  </a>
                </li>
                {/* profile */}
                <li
                  onClick={() => setCurrentLink(5)}
                  className={currentLink === 5 ? "active" : ""}
                >
                  <a href="#">
                    <CgProfile />
                    <span> Manage Profile</span>
                  </a>
                </li>
                {/* setting */}
                <li
                  onClick={() => setCurrentLink(6)}
                  className={currentLink === 6 ? "active" : ""}
                >
                  <a href="#">
                    <IoSettings />
                    <span> Setting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* logout */}
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
      ;
    </>
  );
}
// styled componet
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #172b4d;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: block;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      
      }
    }
  }
`;
