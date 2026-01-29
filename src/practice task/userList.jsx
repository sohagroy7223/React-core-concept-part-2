import { use } from "react";
import SingleUser from "./user";
export default function AllUsers({ Users }) {
  const allPerson = use(Users);
  // console.log(allPerson);
  return (
    <div className="card">
      <h3>all user details is here {allPerson.length}</h3>
      {allPerson.map((person) => (
        <SingleUser key={person.id} person={person}></SingleUser>
      ))}
    </div>
  );
}
