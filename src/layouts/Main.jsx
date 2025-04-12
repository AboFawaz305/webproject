import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <span>Main Layout: </span>
      <Outlet />
      <Footer />
    </>
  )
}
