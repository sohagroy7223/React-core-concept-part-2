import Counter from "./Counter";
import "./App.css";
import Baller from "./baller";

function App() {
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
      <h2>React core concept part 2</h2>
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
