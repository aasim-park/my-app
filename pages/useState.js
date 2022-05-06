import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(4);
  console.log(setCount);
  function decrementCount() {
    setCount((previousCount) => previousCount - 1);
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={decrementCount}>Increment</button>
      <p>useState</p>
    </div>
  );
}

export default UseState;
