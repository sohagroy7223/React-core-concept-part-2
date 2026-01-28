import { use } from "react";
import Comment from "./Comment";
export default function Comments({ CommentsData }) {
  const comments = use(CommentsData);
  //   console.log(comments);
  return (
    <div className="card">
      <h3>All post is here: {comments.length} </h3>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
}
