import { useState } from "react"
import { Link, useOutletContext } from "react-router";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [img_src, setIMGSRC] = useState("");
  const [img_alt, setIMGALT] = useState("");
  const [quote, setQuote] = useState("");
  const [msg, setMsg] = useState("");
  const { isLoggedIn, username } = useOutletContext()
  if (!isLoggedIn)
    return <> Please <Link to="/login">login</Link> to create an article </>

  const submitArticle = async (e) => {
    e.preventDefault();
    setMsg("")
    if (
      title === "" ||
      content === "" ||
      summary === "" ||
      img_src === "" ||
      img_alt === ""
    ) {
      setMsg("Please fill All the fields.")
      return
    }

    const response = await fetch('https://webproject.aabdulaziz.engineer/api/articles', {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
        summary: summary,
        title_img_src: img_src,
        title_img_alt: img_alt,
        username: username,
        quote: quote
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });

    if (!response.ok) {
      console.log("Request ERROR: ", response.status);
      return
    }
    location.href = "/blogs"

  }

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }
  const changeContent = (e) => {
    setContent(e.target.value);
  }
  const changeSummary = (e) => {
    setSummary(e.target.value);
  }
  const changeIMGSRC = (e) => {
    setIMGSRC(e.target.value);
  }
  const changeIMGALT = (e) => {
    setIMGALT(e.target.value);
  }
  const changeQuote = (e) => {
    setQuote(e.target.value);
  }
  return <>
    <form action="">
      <fieldset>
        <legend>New Article</legend>
        <label for="title">
          Enter Title
          <input type="text" id="tilte" name="title" onChange={changeTitle} />
        </label>
        <label for="content">
          Enter Content
          <input type="text" id="content" name="content" onChange={changeContent} />
        </label>
        <label for="summary">
          Enter Summary
          <input type="text" id="summary" name="summary" onChange={changeSummary} />
        </label>
        <label for="img_src">
          Enter Image Source
          <input type="text" id="img_src" name="img_src" onChange={changeIMGSRC} />
        </label>
        <label for="img_alt">
          Enter Image Alternate Text
          <input type="text" id="img_alt" name="img_alt" onChange={changeIMGALT} />
        </label>
        <label for="quote">
          Enter Quote
          <input type="text" id="quote" name="quote" onChange={changeQuote} />
        </label>
        <span>{msg}</span>
        <button type="submit" onClick={submitArticle}>Publish Article</button>
      </fieldset>
    </form>
  </>
}
