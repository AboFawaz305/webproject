import { useState } from "react"
import { useParams } from "react-router"

export default function ComponentName() {
  //TODO: Implement Comments reporting, replying, and writing functionality.
  const { bid } = useParams()
  const [showComments, setShowComments] = useState(true)

  const toggleComments = () => {
    setShowComments(!showComments)
  }
  //TODO: Fetch Article comments data

  // A dummy comments data
  const comments = [{
    commenter: "Azooz",
    content: "This is an amazing article",
    datatime: "2025-4-12 12:12:33",
  }, {
    commenter: "Ali",
    content: "Wow",
    datatime: "2025-4-12 12:12:33",
  }, {
    commenter: "Mohammed",
    content: "Good!",
    datatime: "2025-4-12 12:12:33",
  }].map((c, i) =>
    <li key={i}>
      <div className="commenter"><span>{c.commenter}</span><span>{c.datatime}</span></div>
      <div className="comment-content"><p>{c.content}</p></div>
      <div className="comment-actions">
        <button className="comment-reply">Reply</button>
        <button className="comment-report">Report</button>
      </div>
    </li>
  )

  return <>
    <aside>
      <section id="comments">
        <div id="comments-actions">
          <button id="toggle-comments" onClick={toggleComments}>Toggle comments</button>
          <button id="add-comment">Write a new comment</button>
        </div>
        {
          showComments &&
          <ul>
            {comments}
          </ul>
        }
      </section>
    </aside >
  </>
}


