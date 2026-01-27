import User from "./user";
import { use } from "react";
import "./App.css";
export default function Users({ userData }) {
  const users = use(userData);
  console.log(users);

  return (
    <div className="card">
      <h3>users:{users.length} </h3>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
