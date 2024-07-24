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
        type="phone"
        id="contact"
        placeholder="Phone..."
      />
    </div>
  );
}

export default index;
