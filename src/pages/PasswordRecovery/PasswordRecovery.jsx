import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecoverPassword } from "../../features/Auth/services/authServices";

export default function PasswordRecovery() {
  const dispatch = useDispatch();
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
    // console.log(formData);
    dispatch(fetchRecoverPassword(formData));
  }

  return (
    <main>
      <div>PasswordRecovery</div>
      <h3>Password Lama</h3>
      <input
        title="password"
        type={"password"}
        onChange={(event) => setPrevPassword(event.target.value)}
      />
      <br />
      <h3>Password Baru</h3>
      <input
        title="password"
        type={"password"}
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <br />
      <h3>Konfirmasi Password Baru</h3>
      <input
        title="password"
        type={"password"}
        onChange={(event) => setConfirmNewPass(event.target.value)}
      />
      <br />
      {newPassword !== confirmNewPass && <div>Password tidak cocok</div>}
      <br />
      <button>Batal</button>
      <button disabled={disableSubmit} onClick={submitRecovery}>
        Simpan
      </button>
    </main>
  );
}
