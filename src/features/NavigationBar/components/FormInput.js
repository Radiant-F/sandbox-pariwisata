import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IconUser } from "../../../assets";
import styles from "./index.module.css";

export default function FormInput({
  onChange,
  title = "Username",
  placeholder = "Username",
  type = "text",
  icon = IconUser,
  password = false,
}) {
  const { message } = useSelector((state) => state.auth);
  const [onFocus, setOnFocus] = useState(false);

  const res401 =
    "Tidak ada akun aktif yang ditemukan dengan kredensial yang diberikan";

  return (
    <div>
      <p style={{ color: "black", fontFamily: "Poppins Medium" }}>{title}</p>
      <div
        className={styles.inputContainer}
        style={{
          borderColor: onFocus
            ? "orange"
            : res401 === message
            ? "tomato"
            : "#8080808c",
        }}
      >
        <img alt="icon" src={icon} style={{ width: "25px", height: "25px" }} />
        <input
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          className={styles.textInput}
          title={title}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      </div>
      <div className={styles.errorContainer}>
        <p className={styles.textError}>{message}</p>
      </div>
    </div>
  );
}
