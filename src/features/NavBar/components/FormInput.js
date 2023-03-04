import { useState } from "react";
import { useSelector } from "react-redux";
import { IconEye, IconEyeSlash, IconUserOctagon } from "../../../components";
import styles from "./index.module.css";

export default function FormInput({
  onChange,
  icon = IconUserOctagon,
  placeholder = "Placeholder..",
  type = "text",
  title = "Username",
}) {
  const { error_message } = useSelector((state) => state.auth);
  const [focused, setFocused] = useState(false);
  const [password, setPassword] = useState("password");

  const containerStyle = {
    borderColor: focused ? "#F7911A80" : "#bababa",
    borderWidth: focused ? 1 : 0.5,
    boxShadow: `0px 0px ${focused ? 10 : 0}px #F7911A80`,
    transition: "box-shadow 0.25s",
  };

  return (
    <div>
      <p className={styles.textTitle}>{title}</p>
      <div className={styles.containerInput} style={containerStyle}>
        <img alt="input icon" src={icon} className={styles.iconInput} />
        <input
          className={styles.input}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type={type === "text" ? type : password}
        />
        {type === "password" && (
          <img
            alt="eye"
            src={password === "password" ? IconEye : IconEyeSlash}
            className={styles.iconEye}
            onClick={() =>
              setPassword(password === "password" ? "text" : "password")
            }
          />
        )}
      </div>
      <p className={styles.textError}>{error_message}</p>
    </div>
  );
}
