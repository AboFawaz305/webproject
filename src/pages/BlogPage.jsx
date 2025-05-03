import useSWR from "swr";
import Article from "../components/Article";
import CommentsSection from "../components/CommentsSection";
import { useState } from "react";

export default function BlogPage() {
  const [showComments, SetShowComments] = useState(true);

  // {
  //   showComments &&
  //   <CommentsSection />
  // }
  return <>
    <Article showComments={showComments} SetShowComments={SetShowComments} />
  </>
}
