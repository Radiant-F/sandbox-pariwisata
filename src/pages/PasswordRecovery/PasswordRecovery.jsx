import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../../assets";
import { fetchRecoverPassword } from "../../features/Auth/services/authServices";
import styles from "./index.module.css";

export default function PasswordRecovery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const disableSubmit =
    prevPassword === "" ||
    newPassword === "" ||
    confirmNewPass === "" ||
    newPassword !== confirmNewPass;

  async function submitRecovery() {
    const formData = {
      old_password: prevPassword,
      new_password: newPassword,
    };
    dispatch(fetchRecoverPassword(formData));
  }

  return (
    <main className={styles.container}>
      <div className={styles.textTitle}>Ubah Password</div>
      <Gap height={50} />
      <div style={{ fontWeight: "bold" }}>Password Lama</div>
      <input
        className={styles.inputContainer}
        placeholder={"Masukan password lama"}
        title="password"
        type={"password"}
        onChange={(event) => setPrevPassword(event.target.value)}
      />
      <br />
      <Gap height={20} />
      <div style={{ fontWeight: "bold" }}>Password Baru</div>
      <input
        className={styles.inputContainer}
        placeholder={"Masukan password baru"}
        title="password"
        type={"password"}
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <br />
      <Gap height={20} />
      <div style={{ fontWeight: "bold" }}>Konfirmasi Password Baru</div>
      <input
        className={styles.inputContainer}
        placeholder={"Masukan konfirmasi password baru"}
        title="password"
        type={"password"}
        onChange={(event) => setConfirmNewPass(event.target.value)}
      />
      <br />
      {/* {newPassword !== confirmNewPass && <div>Password tidak cocok</div>} */}
      <Gap height={50} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button title="Batal" onClick={() => navigate("/profile")} cancel />
        <Gap width={10} />
        <Button
          title="Simpan"
          disabled={disableSubmit}
          onClick={submitRecovery}
          width={120}
        />
      </div>
    </main>
  );
}
