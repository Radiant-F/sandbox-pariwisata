import React from "react";
import styles from "./index.module.css";

export default function Button({
  title = "Login",
  onClick,
  disabled,
  width,
  cancel,
}) {
  return (
    <button
      className={cancel ? styles.containerCancel : styles.container}
      style={{ opacity: disabled ? 0.5 : 1, width }}
      onClick={onClick}
      disabled={disabled}
    >
      <p className={cancel ? styles.textCancel : styles.text}>{title}</p>
    </button>
  );
}
