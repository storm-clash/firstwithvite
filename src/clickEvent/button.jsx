import styles from "./button.module.css";

//click event = An interaction when a user clicks on a specific element.
//              we can respond to clicks by passing
//              a callback to the onClick event handler.

function ClicEvent() {
  const handleClick = (name) => console.log(`${name} executed the action`);

  return <button onClick={() => handleClick("Jesus")}>Click Event</button>;
}

export default ClicEvent;
