import styles from "./style.module.css";
import Resct, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Exercice"]);
  const [newTask, setNewTask] = useState("");

  const hanldeInutChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {};

  const deleteTask = (index) => {};

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <>
      <div className={styles.wrapper}>
        <h1>To Do List</h1>
      </div>

      <div>
        <input
          className={styles.input_To_Do}
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={hanldeInutChange}
        ></input>
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
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
