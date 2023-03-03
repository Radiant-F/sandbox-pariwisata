import { useState } from "react";
import { IconUserOctagon } from "../..";
import styles from "./index.module.css";

export default function FormInput({
  onChange,
  icon = IconUserOctagon,
  placeholder = "Placeholder..",
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <div
        className={styles.containerInput}
        style={{
          borderColor: focused ? "#F7911A80" : "#bababa",
          borderWidth: focused ? 1 : 0.5,
        }}
      >
        <img alt="input icon" src={icon} className={styles.iconInput} />
        <input
          className={styles.input}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
}
