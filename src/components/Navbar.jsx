import { Link } from "react-router"

export default function Navbar() {
  return <>
    <header>
      <img src="/assets/logo.png" alt="Blog logo" id="logo" />
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>
      </nav>
      <div id="#actions"></div>
    </header>
  </>
}


