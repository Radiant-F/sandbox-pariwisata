import React from "react";
import { useSelector } from "react-redux";

export default function Tourist() {
  const { tourist_id: id } = useSelector((state) => state.tourist_obj);
  return (
    <main>
      <h3>Detail Pariwisata dengan id: {id}</h3>
    </main>
  );
}
