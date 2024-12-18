// React Hook = Special function that allows functional components to use React
//              features without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback, and more)

//useState() = A React hook that allows the creation of a stateful variable
//             and a setter function to update its value in the Virtual DOM.
//             [name, setName]

import React, { useState } from "react";

function ComponentHook() {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);

  const updateName = () => {
    setName("New Value");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Name: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
}

export default ComponentHook;
