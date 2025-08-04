import React from "react";
import UserPage from "./UserPage";
import GuestPage from "./GuestPage";

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    
    return <UserPage />;
  }
  return <GuestPage />;
}

export default Greeting;
