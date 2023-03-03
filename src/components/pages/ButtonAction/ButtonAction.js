import { IconPlusRound } from "../..";
import styles from "./index.module.css";

export default function ButtonAction({
  title = "Button",
  disabled,
  onClick,
  width,
  height,
  icon,
}) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      disabled={disabled}
      style={{ width, height, opacity: disabled ? 0.7 : 1 }}
    >
      {icon && (
        <>
          <img src={IconPlusRound} width={20} height={20} />
          <div style={{ width: 7.5 }} />
        </>
      )}
      <p className={styles.textTitle}>{title}</p>
    </button>
  );
}
