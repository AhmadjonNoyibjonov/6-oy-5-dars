import React from "react";
import styles from "./index.module.css";

function name() {
  return (
    <div>
      <label className={styles['email_lebel']} htmlFor="name">Name</label>
      <input className={styles['input_email']} type="text" id="name" placeholder="Enter name..." />
    </div>
  );
}

export default name;
