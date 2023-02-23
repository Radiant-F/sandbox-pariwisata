import React from "react";
import styles from "./index.module.css";

export default function Button({ title = "Login", disabled, loading }) {
  return (
    <button className={styles.container}>
      <p>{title}</p>
    </button>
  );
}
