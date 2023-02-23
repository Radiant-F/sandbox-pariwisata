import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMGpfpDefault } from "../../../assets";
import axios from "axios";
import { fetchUserUpdate } from "../../Auth/services/authServices";

export default function UserProfile() {
  const dispatch = useDispatch();
  const {
    email,
    username,
    full_name,
    photo,
    role,
    handphone,
    address,
    is_active,
  } = useSelector((state) => state.auth.user_data);
  const { access } = useSelector((state) => state.auth.token);

  const [fullName, setFullName] = useState(
    username.charAt(0).toUpperCase() + username.slice(1)
  );
  const [newEmail, setNewEmail] = useState(email);
  const [newAddress, setNewAddress] = useState(address);
  const [noHandphone, setNoHandphone] = useState(handphone);
  const [image, setImage] = useState(null);

  async function submitUpdateProfile() {
    const formData = new FormData();
    formData.append("photo", image);
    formData.append("email", newEmail);
    formData.append("address", newAddress);
    formData.append("handphone", noHandphone);
    formData.append("full_name", fullName);
    // axios
    //   .patch(
    //     "https://api-entrytest.sandboxindonesia.id/api/user/user/me/",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${access}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    dispatch(fetchUserUpdate(formData));
  }

  return (
    <main>
      <div>
        <img
          alt="Profile Picture"
          src={photo ? photo : IMGpfpDefault}
          style={{ width: "50px", height: "50px" }}
        />
        <div>{fullName.charAt(0).toUpperCase() + fullName.slice(1)}</div>
        Nama
        <input
          title="Nama"
          type={"text"}
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <br />
        Email
        <input
          title="email"
          type={"text"}
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <br />
        Alamat
        <input
          title="address"
          type={"text"}
          value={newAddress}
          onChange={(event) => setNewAddress(event.target.value)}
        />
        <br />
        No Handphone
        <input
          title="phone"
          type={"number"}
          value={noHandphone}
          onChange={(event) => setNoHandphone(event.target.value)}
        />
        <br />
        Foto
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button onClick={submitUpdateProfile}>Submit</button>
    </main>
  );
}
