import React, { useState } from "react";
import styles from "./Picker.module.css";

function PickerEjercice() {
  const [color, setColor] = useState("#FFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className={styles.color_picker_Wrapper}>
        <h1>Color Picker</h1>
        <div className={styles.input_Picker} style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}

export default PickerEjercice;
