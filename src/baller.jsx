import { useState } from "react";

export default function Baller() {
  const [ball, setBall] = useState(0);
  const handel1 = () => {
    setBall("1 st ball");
  };
  const handel2 = () => {
    setBall("2 nd ball");
  };
  const handel3 = () => {
    setBall("3 rd ball");
  };
  const handel4 = () => {
    setBall("4 th ball");
  };
  const handel5 = () => {
    setBall("5 th ball");
  };
  const handel6 = () => {
    setBall("6 th ball");
  };
  const yet = () => {
    setBall(setBall, alert("yet ball"));
  };
  const no = () => {
    setBall(setBall, alert("No ball"));
    if (no) {
      alert("ke ra vai ");
    }
  };
  return (
    <div>
      <h3>ball num: {ball}</h3>
      <button onClick={handel1}>1st ball </button>
      <button onClick={handel2}>2nd ball </button>
      <button onClick={handel3}>3rd ball </button>
      <button onClick={handel4}>4th ball </button>
      <button onClick={handel5}>5th ball </button>
      <button onClick={handel6}>6th ball </button>
      <button onClick={yet}>yet ball</button>
      <button onClick={no}>no ball</button>
    </div>
  );
}
