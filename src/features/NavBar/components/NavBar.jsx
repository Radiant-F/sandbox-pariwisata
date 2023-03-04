import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FormInput from "./FormInput";
import styles from "./index.module.css";
import { SetLoginModal } from "../../../redux/slices/authSlice";
import {
  ButtonAction,
  Gap,
  IconCloseSquare,
  IconKey,
  IconProfileDefault,
  IMGsandbox,
} from "../../../components";
import { fetchSignIn } from "../services/navBarServices";

export default function NavBar() {
  const dispatch = useDispatch();
  const { token, modal, status, user_data } = useSelector(
    (state) => state.auth
  );
  const { full_name, photo } = user_data;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disableButton =
    email === "" ||
    password === "" ||
    !email.includes("@") ||
    !email.includes(".");

  return (
    <main className={styles.container}>
      <img alt="sandbox logo" src={IMGsandbox} style={{ width: 150 }} />
      {token.access ? (
        <div className={styles.containerProfile}>
          <img
            alt="pfp"
            src={photo ? photo : IconProfileDefault}
            className={styles.imgProfile}
          />
          <Gap width={10} />
          <p>{`${full_name}`.split(" ")[0]}</p>
          <Gap width={10} />
        </div>
      ) : (
        <ButtonAction
          onClick={() => dispatch(SetLoginModal(true))}
          title="Login"
          width={100}
        />
      )}
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.containerModal}>
            <div className={styles.modalHeader}>
              <Gap width={20} />
              <p style={{ fontWeight: "bold" }}>Login</p>
              <img
                alt="close"
                src={IconCloseSquare}
                style={{ width: 20, height: 20 }}
                onClick={() => dispatch(SetLoginModal(false))}
              />
            </div>
            <Gap height={20} />
            <FormInput
              placeholder="Username"
              onChange={(v) => setEmail(v.target.value)}
            />
            <Gap height={20} />
            <FormInput
              title="Password"
              placeholder="Password"
              icon={IconKey}
              type="password"
              onChange={(v) => setPassword(v.target.value)}
            />
            <div className={styles.containerBtn}>
              <ButtonAction
                title={status === "pending" ? "Memuat.." : "Login"}
                disabled={disableButton}
                onClick={() => dispatch(fetchSignIn({ email, password }))}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
