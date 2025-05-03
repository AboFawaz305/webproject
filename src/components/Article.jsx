import { useParams } from "react-router"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Article({ showComments, SetShowComments }) {
  const { bid } = useParams()
  //TODO: Fetch Article data from the server
  const { data, isLoading, error } = useSWR("http://mywebprojectapi.aabdulaziz.engineer//articles", fetcher);
  SetShowComments(true)
  if (isLoading)
    return (<span>Loading the article...</span>)

  // Dummy Data
  let article = {}
  for (let i = 0; data && i < data.length; i++) {
    if (data[i]['article_id'] == bid) {
      article = data[i]
      break
    }
  }
  if (!article['article_id']) {
    SetShowComments(false);
    return <>
      <span>Article not Found</span>
    </>
  }

  return <>
    <article>
      <img src={article.title_img_src} alt={article.title_img_alt} />
      <div id="author-date-container">
        <span id="author-name">{article.username}</span><span id="article-date">{article.publish_date}</span>
      </div>
      <h2>{article.title}</h2>
      <div id="content-container">
        {article.content}
      </div>
    </article>
  </>
}


