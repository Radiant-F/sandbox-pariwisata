import { useSelector } from "react-redux";
import { ButtonAction, Gap, IMGsandbox } from "../..";
import FormInput from "./FormInput";
import styles from "./index.module.css";

export default function NavBar() {
  const { access } = useSelector((state) => state.auth.token);
  return (
    <main className={styles.container}>
      <img alt="sandbox logo" src={IMGsandbox} style={{ width: 150 }} />
      <div>
        <ButtonAction
          onClick={() => console.log("dispatch login")}
          title="Login"
          width={100}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.containerModal}>
          <p style={{ fontWeight: "bold" }}>Login</p>
          <FormInput placeholder="Username" />
          <Gap height={20} />
          <FormInput />
        </div>
      </div>
    </main>
  );
}
