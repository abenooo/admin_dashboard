import React from "react";
import profile from './profile.css'
import styled from "styled-components";
import Navbar from "./Navbar";
function Profile() {
  return (
    <>
     {/* <Navbar /> */}

      <Div className="profile">
        <h3>this is profile page</h3>
        <p>dshfkjhdsfh</p>
      </Div>
    </>
  );
}
const Div = styled.div`
  ${profile}
`
export default Profile;
