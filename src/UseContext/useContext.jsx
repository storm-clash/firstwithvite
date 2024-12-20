import React, { useState, useEffect, useContext, createContext } from "react";
import ComponentA from "./ComponentA";

/*

    useContext() = React hook that allows you to share values
                   between multiple levels of components
                   without passing props through each level 

    Provider Component
    1. import {createContext} from 'react';
    2. export const MyContext = createContext();
    3. <MyContext.Provider value={value}>
         <Child/>
       <MyContext.Provider/>                 

    Consumer Component
    1. import React, {useContext} from 'react';
       import {MyContext} from './ComponentA'; 
    2. const value = useContext(MyContext);      

*/

export const UserContext = createContext();

function UseContextComponent() {
  const [user, setUser] = useState("Jesus");
  return (
    <div className="box">
      <h1>Main Component</h1>
      <h2>{`Hello ${user}`}</h2>

      <UserContext.Provider value={user}>
        <ComponentA user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default UseContextComponent;
