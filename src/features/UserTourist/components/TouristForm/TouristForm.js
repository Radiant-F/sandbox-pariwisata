import React, { useState } from "react";
import styles from "./index.module.css";

export default function TouristForm() {
  const [name, setName] = useState("Kawah Putih");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("50000");
  const [category, setCategory] = useState("Pegunungan");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({
    type: "Point",
    coordinates: [12.9721, 77.5933],
  });
  return (
    <main style={{ flex: 1 }}>
      <div className={styles.textTitle}>Tambah Wisata</div>
      <input type={"text"} name="name" />
    </main>
  );
}
