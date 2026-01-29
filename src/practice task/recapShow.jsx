import { useState } from "react";

export default function Show() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="cards">
      <button onClick={() => setDisplay(!display)}>
        {display ? "hide" : "show"}
      </button>
      {display && <h3>hello react learner</h3>}
    </div>
  );
}
