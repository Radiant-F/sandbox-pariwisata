import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetAuthModal } from "../../Auth/services/authSlice";
import { fetchSignIn, fetchSignOut } from "../../Auth/services/authServices";
import { Button, IMGpfpDefault, IMGsandbox } from "../../../assets";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const { token, auth_modal, status, user_data, message } = useSelector(
    (state) => state.auth
  );
  const { username, photo } = user_data;
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [menu, setMenu] = useState(false);
  function submitSignIn() {
    dispatch(fetchSignIn({ email, password }));
  }

  function handleSignOut() {
    setMenu(false);
    dispatch(fetchSignOut(navigate));
  }

  // console.log(token.access);

  const disableLogin =
    status === "pending" ||
    email === null ||
    email === "" ||
    password === null ||
    password === "";

  return (
    <nav>
      <Link to={"/"} onClick={() => setMenu(false)}>
        <img alt="Sandbox Logo" src={IMGsandbox} style={{ width: 130 }} />
      </Link>
      <Link
        onClick={() => {
          !token.access ? dispatch(SetAuthModal(!auth_modal)) : setMenu(!menu);
        }}
      >
        {username ? (
          <>
            <img
              alt="Profile picture"
              src={photo ? photo : IMGpfpDefault}
              style={{ width: "50px", height: "50px" }}
            />
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </>
        ) : (
          <Button />
        )}
      </Link>
      {menu && (
        <div>
          <Link to={"/profile"} onClick={() => setMenu(false)}>
            Profil Saya
          </Link>
          <Link to={"/recovery"} onClick={() => setMenu(false)}>
            Ubah Password
          </Link>
          <Link onClick={handleSignOut}>Keluar</Link>
        </div>
      )}
      <div>auth status: {status}</div>
      {auth_modal && (
        <div>
          <input
            title="email"
            type={"text"}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            title="password"
            type={"password"}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={submitSignIn} disabled={disableLogin}>
            submit
          </button>
          <br />
          <div>{message && message}</div>
        </div>
      )}
    </nav>
  );
}
