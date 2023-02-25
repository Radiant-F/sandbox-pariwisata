import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetAuthModal } from "../../../redux/slices/authSlice";
import { fetchSignIn, fetchSignOut } from "../../Auth/services/authServices";
import {
  Button,
  IconChevron,
  IconCloseSquare,
  IconKey,
  IMGpfpDefault,
  IMGsandbox,
} from "../../../assets";
import styles from "./index.module.css";
import FormInput from "./FormInput";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const { token, auth_modal, status, user_data } = useSelector(
    (state) => state.auth
  );
  const { username, photo } = user_data;
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [menu, setMenu] = useState(false);

  const disableLogin =
    status === "pending" ||
    email === null ||
    email === "" ||
    password === null ||
    password === "";

  return (
    <>
      {auth_modal && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(SetAuthModal(false))}
        />
      )}
      <nav className={styles.container}>
        <Link to={"/"} onClick={() => setMenu(false)}>
          <img alt="Sandbox Logo" src={IMGsandbox} style={{ width: 130 }} />
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          onClick={() => {
            !token.access
              ? dispatch(SetAuthModal(!auth_modal))
              : setMenu(!menu);
          }}
        >
          {username ? (
            <div className={styles.profileContainer}>
              <div className={styles.pfpContainer}>
                <img
                  alt="Profile"
                  src={photo ? photo : IMGpfpDefault}
                  style={{ height: "50px" }}
                />
              </div>
              <p className={styles.textUsername}>
                {username.charAt(0).toUpperCase() + username.slice(1)}
              </p>
              <img
                alt="Chevron menu"
                src={IconChevron}
                style={{ width: "10px" }}
              />
            </div>
          ) : (
            <Button />
          )}
        </Link>
        {menu && (
          <div className={styles.containerMenu}>
            <Link
              to={"/profile"}
              onClick={() => setMenu(false)}
              className={styles.btnTextProfile}
            >
              Profil Saya
            </Link>
            <Link
              to={"profile/recovery"}
              onClick={() => setMenu(false)}
              className={styles.btnTextProfile}
            >
              Ubah Password
            </Link>
            <Link
              onClick={() => {
                setMenu(false);
                dispatch(fetchSignOut(navigate));
              }}
              className={styles.btnTextProfile}
            >
              {status === "pending" ? "Memuat.." : "Keluar"}
            </Link>
          </div>
        )}

        {auth_modal && (
          <div className={styles.modalContainer}>
            <div
              className={styles.modalOverlay}
              onClick={() => dispatch(SetAuthModal(false))}
            />
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <div style={{ width: "25px", height: "25px" }} />
                <p className={styles.textModalTitle}>Login</p>
                <button
                  className={styles.closeButton}
                  onClick={() => dispatch(SetAuthModal(false))}
                >
                  <img
                    alt="icon"
                    src={IconCloseSquare}
                    style={{ width: "25px", height: "25px" }}
                  />
                </button>
              </div>
              <FormInput onChange={(e) => setEmail(e.target.value)} />
              <FormInput
                onChange={(e) => setPassword(e.target.value)}
                password
                title="Password"
                type="password"
                placeholder="Password"
                icon={IconKey}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <Button
                  onClick={() => dispatch(fetchSignIn({ email, password }))}
                  disabled={disableLogin || status === "pending"}
                  title={status === "pending" ? "Memuat.." : "Login"}
                  width={"200px"}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
