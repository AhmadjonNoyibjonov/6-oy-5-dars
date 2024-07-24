import React from "react";
import styles from "./index.module.css";
import data from "../../assets/data.json";

function index() {
  return (
    <div>
      <label className={styles.country_lebel} htmlFor="country">Country</label>
      <select className={styles.select_country} name="country" id="country">
        {data &&
          data.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default index;
