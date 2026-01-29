import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    const updateNum = count + 1;
    setCount(updateNum);
  }
  function decrement() {
    const updateNum = count - 1;
    updateNum < 0 ? alert("not allow") : setCount(updateNum);
  }

  function resat() {
    setCount(0);
  }

  return (
    <div className="cards">
      <h3>count :{count} </h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={resat}>resat</button>
    </div>
  );
}
