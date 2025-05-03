import { Link, useOutletContext } from "react-router"

export default function Navbar({ username, isLoggedIn }) {
  console.log(username)

  return <>
    <header>
      <Link to="/home" id="logo">✍️</Link>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>
      </nav>
      <div id="#actions">
        {isLoggedIn && <span>Hello {username}</span>}
      </div>
    </header>
  </>
}


