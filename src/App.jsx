import Counter from "./Counter";
import Comments from "./comments";
import "./App.css";
import Baller from "./baller";
import Players from "./players";
import Users from "./Users";
import { Suspense } from "react";
import Post from "./post";
import Count from "./practice task/count";
import Display from "./practice task/ShowHide";
import Show from "./practice task/recapShow";
import AllUsers from "./practice task/userList";
// const friends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };
// const CommentsData = fetch(
//   "https://jsonplaceholder.typicode.com/comments",
// ).then((res) => res.json());

// const userData = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

function App() {
  const Users = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json(),
  );
  // const postPromise = friends();

  const handleClick2 = () => {
    alert("second click");
  };

  function handleClick() {
    alert("first click");
  }

  const handelAdd5 = (num) => {
    const total = num + 5;
    alert(total);
  };
  return (
    <>
      <Suspense>
        <AllUsers Users={Users}></AllUsers>
      </Suspense>
      <Show></Show>
      <Display></Display>
      <Count></Count>
      {/* <Players></Players> */}

      {/* <Suspense fallback={<h3>Loading comment data...</h3>}>
        <Comments CommentsData={CommentsData}></Comments>
      </Suspense> */}

      {/* <h2>React core concept part 2</h2>
      <Suspense fallback={<h3>loading data ...</h3>}>
        <Users userData={userData}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>friends are coming...</h3>}>
        <Post postPromise={postPromise}></Post>
      </Suspense> */}

      <Baller></Baller>
      <Counter></Counter>
      <div>
        <button className="btn" onClick={handleClick}>
          click me
        </button>
        <button className="btn" onClick={handleClick2}>
          click me2
        </button>
        <button
          className="btn"
          onClick={function handelClick3() {
            alert("third click");
          }}
        >
          click me3
        </button>
        <button
          className="btn"
          onClick={() => {
            alert("btn click 4");
          }}
        >
          click me 4
        </button>
        <button className="btn" onClick={() => handelAdd5(10)}>
          btn 5
        </button>
      </div>
    </>
  );
}

export default App;
