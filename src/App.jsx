import Counter from "./Counter";
import Comments from "./comments";
import "./App.css";
import Baller from "./baller";
import Users from "./Users";
import { Suspense } from "react";
import Post from "./post";

// const friends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };
const CommentsData = fetch(
  "https://jsonplaceholder.typicode.com/comments",
).then((res) => res.json());

function App() {
  // const postPromise = friends();

  // const userData = fetch("https://jsonplaceholder.typicode.com/users").then(
  //   (res) => res.json(),
  // );

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
        <Comments CommentsData={CommentsData}></Comments>
      </Suspense>

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
