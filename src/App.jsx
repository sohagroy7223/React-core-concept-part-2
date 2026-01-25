import "./App.css";

function App() {
  const handleClick2 = () => {
    alert("second click");
  };

  function handleClick() {
    alert("first click");
  }
  return (
    <>
      <h2>React core concept part 2</h2>
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
      </div>
    </>
  );
}

export default App;
