import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handelAdd = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const countStyle = {
    border: "3px solid green",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={countStyle}>
      <h3>count: {count} </h3>
      <button onClick={handelAdd}>add:</button>
    </div>
  );
}
