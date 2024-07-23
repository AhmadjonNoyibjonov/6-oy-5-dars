import React from "react";
import styles from "./index.module.css";

function index() {
  return (
    <div>
      <label className={styles["contact_lebel"]} htmlFor="contact">
        Contact
      </label>
      <input
        className={styles["input_contact"]}
        type="number"
        id="contact"
        placeholder="phone..."
      />
    </div>
  );
}

export default index;
