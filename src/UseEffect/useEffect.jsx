import React, { useState, useEffect } from "react";

/*
    useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
                  This component re-renders
                  This component mounts
                  This state of a value

    useEffect(function, [dependencies])
    
    1. useEffect(() => {})           // Runs after every re-render
    2. useEffect(() => {}, [])       // Runs only on mount
    3. useEffect(() => {}, [value])  // Runs on mount + when value changes

    USES
    #1 Event Listeners
    #2 DOM Manipulation
    #3 Subscriptions (real-time updates)
    #4 Fetching Data from an API
    #5 Clean up when a component unmounts


*/

function UseEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  useEffect(() => {
    window.addEventListener("resize", addCount);

    return () => {
      window.removeEventListener("resize", addCount);
    };
  });

  const addCount = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  );
}

export default UseEffectComponent;
