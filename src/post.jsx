import { use } from "react";

export default function Post({ postPromise }) {
  const post = use(postPromise);
  console.log(post);
  return (
    <div className="card">
      <h3>post : {post.length}</h3>
    </div>
  );
}
