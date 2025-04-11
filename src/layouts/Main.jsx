import { Outlet } from "react-router";

export default function Main() {
  return (
    <>
      <span>Main Layout: </span>
      <Outlet />
    </>
  )
}
