import React, { useState } from "react";

/*
    Updater Function = A function passed as an argument to setState() usually
                       ex. setYear(arrow function)
                       Allow for safe updates based on the previous state
                       Used with multiple state updates and asynchronous functions
                       Good practice to use updater function 


*/

function UpdateComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default UpdateComponent;
