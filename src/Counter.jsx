export default function Counter() {
  const countStyle = {
    border: "3px solid green",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={countStyle}>
      <h3>count: </h3>
      <button>add: </button>
    </div>
  );
}
