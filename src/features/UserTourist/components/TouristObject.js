import React from "react";
import { Link } from "react-router-dom";

export default function TouristObject() {
  return (
    <main style={{ flex: 1 }}>
      <div>TouristObject</div>
      <input placeholder="cari" type={"text"} name={"tourist"} />
      <Link to={"/profile/tourist/add"}>+ Tambah</Link>
    </main>
  );
}
