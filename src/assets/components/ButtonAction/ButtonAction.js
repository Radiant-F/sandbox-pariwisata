import React from "react";
import styles from "./index.module.css";

export default function ButtonAction({ onClick, title, disabled }) {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled}>
      <p style={{ color: "white", fontWeight: "bold" }}>{title}</p>
    </button>
  );
}
