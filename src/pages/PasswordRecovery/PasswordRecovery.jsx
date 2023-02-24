import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../../assets";
import { fetchRecoverPassword } from "../../features/Auth/services/authServices";
import { SetStatusAuth } from "../../redux/slices/authSlice";
import styles from "./index.module.css";

export default function PasswordRecovery() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  useEffect(() => {
    if (status === "success")
      setTimeout(() => dispatch(SetStatusAuth("idle")), 2000);
  }, [status, dispatch]);

  const disableSubmit =
    prevPassword === "" ||
    newPassword === "" ||
    confirmNewPass === "" ||
    status === "pending" ||
    newPassword !== confirmNewPass;

  async function submitRecovery() {
    const formData = {
      old_password: prevPassword,
      new_password: newPassword,
    };
    dispatch(fetchRecoverPassword(formData));
  }

  const btnTitle =
    status === "idle"
      ? "Simpan"
      : status === "pending"
      ? "Menyimpan.."
      : status === "success"
      ? "Sukses"
      : "Gagal";

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
          title={btnTitle}
          disabled={disableSubmit}
          onClick={submitRecovery}
          width={120}
        />
      </div>
    </main>
  );
}
