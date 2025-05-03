import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Main() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [username, SetUsername] = useState("")

  return (
    <>
      <Navbar username={username} isLoggedIn={isLoggedIn} />
      <main>
        <Outlet context={
          {
            isLoggedIn: isLoggedIn,
            SetIsLoggedIn: SetIsLoggedIn,
            username: useState,
            SetUsername: SetUsername
          }
        } />
      </main>
      <Footer />
    </>
  )
}
