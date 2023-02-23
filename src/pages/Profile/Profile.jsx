import React from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "../../features/Profile";

export default function Profile() {
  return (
    <main>
      <Link to={"/profile"}>Profil Saya</Link>
      <Link to={"/profile/tourist"}>Wisata Saya</Link>
      <UserProfile />
    </main>
  );
}
