import React from "react";
import styles from "./index.module.css";

function index() {
  return (
    <div>
      <label className={styles["adres_lebel"]} htmlFor="address">
        Address
      </label>
      <input
        className={styles["input_adres"]}
        type="text"
        id="address"
        placeholder="Address email..."
      />
    </div>
  );
}

export default index;
