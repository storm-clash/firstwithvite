import styles from "./style.module.css";
import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Exercice"]);
  const [newTask, setNewTask] = useState("");

  const hanldeInutChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h1>To Do List</h1>
      </div>

      <div className={styles.flex_row}>
        <input
          className={styles.input_To_Do}
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={hanldeInutChange}
        ></input>
        <button onClick={addTask}>Add</button>
      </div>
      <ol className={styles.ol}>
        {tasks.map((task, index) => (
          <li className={styles.li_Wrapper} key={index}>
            <span className={styles.text}>{task}</span>
            <button
              className={styles.delete_Button}
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            <button
              className={styles.move_Up_Button}
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>

            <button
              className={styles.move_Down_Button}
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDoList;
