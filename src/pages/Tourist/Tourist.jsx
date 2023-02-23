import React from "react";
import { useSelector } from "react-redux";

export default function Tourist() {
  const { id } = useSelector((state) => state.pariwisata);
  return (
    <main>
      <h3>Detail Pariwisata dengan id: {id}</h3>
    </main>
  );
}
