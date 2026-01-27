import { use } from "react";
import "./App.css";
export default function User({ userData }) {
  const user = use(userData);
  console.log(user);

  return (
    <div className="card">
      <h3>user:{user.length} </h3>
    </div>
  );
}
