import { useState } from "react";

export default function Display() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <h3> Hello react Learner</h3>}
    </div>
  );
}
