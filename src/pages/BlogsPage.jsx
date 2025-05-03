import { Link } from "react-router"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())
export default function BlogsPage() {
  const { data, isLoading, error } = useSWR("https://webproject.aabdulaziz.engineer/api/articles", fetcher);
  console.log(data, isLoading, error)

  let blogs = <></>;
  if (data)
    blogs = data.map((b, i) =>
      <li key={b.article_id}>
        <Link to={"/blogs/" + b.article_id}>
          <div>
            <img src={b.title_img_src} alt={b.title_img_alt} />
            <div>
              <h2>{b.tilte}</h2>
              <p>{b.summary}</p>
            </div>
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
