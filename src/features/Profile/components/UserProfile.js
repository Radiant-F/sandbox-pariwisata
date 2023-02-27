import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Gap, IconCamera, IMGpfpDefault } from "../../../assets";
import { fetchUserUpdate } from "../../Auth/services/authServices";
import styles from "./index.module.css";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { email, username, full_name, photo, handphone, address } = useSelector(
    (state) => state.auth.user_data
  );
  const { status } = useSelector((state) => state.auth);

  const [fullName, setFullName] = useState(
    username.charAt(0).toUpperCase() + username.slice(1)
  );
  const [newEmail, setNewEmail] = useState(email);
  const [newAddress, setNewAddress] = useState(address);
  const [noHandphone, setNoHandphone] = useState(handphone);
  const [image, setImage] = useState(null);

  async function submitUpdateProfile() {
    const formData = new FormData();
    image !== null && formData.append("photo", image);
    formData.append("email", newEmail);
    formData.append("address", newAddress);
    formData.append("handphone", noHandphone);
    formData.append("full_name", fullName);
    dispatch(fetchUserUpdate(formData));
  }

  useEffect(() => {
    status === "success" && setImage(null);
  }, [status]);

  const disableButton =
    fullName === "" ||
    newEmail === "" ||
    newAddress === "" ||
    noHandphone === "" ||
    status === "pending";

  return (
    <main style={{ flex: 1 }}>
      <div style={{ flex: 1 }}>
        <div className={styles.containerProfile}>
          <div>
            <div className={styles.containerImgProfile}>
              <img
                alt="profile"
                src={
                  image
                    ? URL.createObjectURL(image)
                    : photo
                    ? photo
                    : IMGpfpDefault
                }
                style={{ height: "110px" }}
              />
            </div>
            <button className={styles.btnCamera}>
              <img
                src={IconCamera}
                alt={"camera"}
                className={styles.iconCamera}
              />
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                alt="img profile"
                style={{ width: "50px", height: "50px", opacity: 0 }}
              />
            </button>
          </div>
          <Gap width={30} />
          <div style={{ flex: 1 }}>
            <p className={styles.textUserName}>
              {full_name.charAt(0).toUpperCase() + full_name.slice(1)}
            </p>
            <p style={{ color: "black", marginTop: "-15px" }}>{address}</p>
          </div>
          <Button
            title={status === "pending" ? "Menyimpan.." : "Simpan"}
            width={120}
            onClick={submitUpdateProfile}
            disabled={disableButton}
          />
        </div>
        <Gap height={40} />
        {/* Name */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "Poppins Bold" }}>Nama</p>
          <input
            className={styles.inputContainer}
            title="name"
            type={"text"}
            defaultValue={full_name}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <br />
        {/* Email */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "Poppins Bold" }}>Email</p>
          <input
            className={styles.inputContainer}
            title="email"
            type={"email"}
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </div>
        <br />
        {/* Address */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "Poppins Bold" }}>Alamat</p>
          <input
            className={styles.inputContainer}
            title="address"
            type={"text"}
            value={newAddress}
            onChange={(event) => setNewAddress(event.target.value)}
          />
        </div>
        <br />
        {/* Phone Number */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "Poppins Bold" }}>No Handphone</p>
          <input
            className={styles.inputContainer}
            title="handphone"
            type={"text"}
            value={noHandphone}
            onChange={(event) => setNoHandphone(event.target.value)}
          />
        </div>
      </div>
      <Gap height={100} />
    </main>
  );
}
