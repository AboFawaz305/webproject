import { Link, useOutletContext, useParams } from "react-router";

export default function HomePage() {
  const { isLoggedIn, SetIsLoggedIn } = useOutletContext()

  return <>
    <article>
      <section id="call-to-action">
        <h2>Interesting articles</h2>
        <p>On this blog you can find a lot of articles and you can publish your own articles</p>
        {
          !isLoggedIn ?
            <> <p>Login or register now to start publishing</p>
              <div id="call-to-action-buttons">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
              </div></> :
            <span><Link to="/blogs/new">Create a new Article</Link></span>
        }
      </section>
    </article>
  </>
}
