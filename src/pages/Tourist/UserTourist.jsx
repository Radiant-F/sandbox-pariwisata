import React from "react";
import { Link } from "react-router-dom";

export default function UserTourist() {
  return (
    <main>
      <Link to={"/profile"}>Profil Saya</Link>
      <Link to={"/profile/tourist"}>Wisata Saya</Link>
      <div>Ini adalah halaman Wisata Saya</div>
    </main>
  );
}
