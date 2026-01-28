import { use } from "react";

export default function Comments({ CommentsData }) {
  const comments = use(CommentsData);
  //   console.log(comments);
  return (
    <div className="card">
      <h3>All post is here: {comments.length} </h3>
    </div>
  );
}
