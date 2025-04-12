import { Link } from "react-router"
export default function BlogsPage() {
  //TODO: Fetch blogs data from the server.

  // Dummy blog data
  const blogs = [
    {
      bid: 1,
      tilte: "an Amazing article",
      img_src: "/assets/title",
      img_alt: "Blog 1 image",
      summary: "This blog talks about this and that...",
    },
    {
      bid: 2,
      tilte: "a Technical one",
      img_src: "/assets/title",
      img_alt: "Blog 2 image",
      summary: "This blog talks about this and that...",
    },
    {
      bid: 3,
      tilte: "an article",
      img_src: "/assets/title",
      img_alt: "Blog 3 image",
      summary: "This blog talks about this and that...",
    },
  ].map((b, i) =>
    <li key={b.bid}>
      <Link to={"/blogs/" + b.bid}>
        <div>
          <img src={b.img_src} alt={b.img_alt} />
          <h2>{b.tilte}</h2>
          <p>{b.summary}</p>
        </div>
      </Link>
    </li>
  )
  return <>
    <article>
      <section id="blogs">
        <h2>Blogs</h2>
        <ul id="blogs-list">
          {blogs}
        </ul>
      </section>
    </article>
  </>
}
