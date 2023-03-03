import { Gap, IMGsandbox, Line } from "../../../assets";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.containerContent}>
        <img alt="sandbox logo" src={IMGsandbox} style={{ width: 175 }} />
        <Gap height={20} />
        <Line />
      </div>
    </footer>
  );
}
