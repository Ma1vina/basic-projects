import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count - 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
