import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddUserTourist,
  fetchMapBorder,
} from "../../services/userTouristServices";
import styles from "./index.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Gap } from "../../../../assets";
import { GeoJSON } from "react-leaflet";

export default function TouristForm() {
  const dispatch = useDispatch();
  const { status_borderline: status, borderline } = useSelector(
    (state) => state.tourist_obj
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchMapBorder());
  }, [status, dispatch]);

  const [name, setName] = useState("Kawah Putih");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("50000");
  const category = [
    { slug: "238r9873tgbeirh3489", title: "Pegunungan" },
    { slug: "ry2897cncrn2h9hf9w9", title: "Pertanian" },
    { slug: "fmlskdnf09u4r8934r9", title: "Cagar Alam" },
    { slug: "8239cn87fgeniunhoem", title: "Bahara" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(category[0].slug);
  const [description, setDescription] = useState(
    "Deskripsi Wisata Kawah Putih"
  );
  const [location, setLocation] = useState({
    type: "Point",
    coordinates: [-6.175395, 106.827201],
  });
  // const [address, setAddress] = useState("");

  function submitTouristObj() {
    const formData = {
      name,
      image,
      price,
      category,
      description,
      location,
    };
    dispatch(fetchAddUserTourist(formData));
  }

  function OnClickEvent() {
    useMapEvent("click", ({ latlng }) => {
      setLocation({ ...location, coordinates: [latlng.lat, latlng.lng] });
    });
    return null;
  }

  const disableButton =
    name === "" ||
    image === null ||
    price === "" ||
    category === "" ||
    description === "";

  return (
    <main style={{ flex: 1 }}>
      <div className={styles.textTitle}>Tambah Wisata</div>
      <div>Nama</div>
      <input
        type={"text"}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <div>Harga</div>
      <input
        type={"number"}
        name="harga"
        onChange={(e) => setPrice(e.target.value)}
      />
      <div>Kategori</div>
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        {category.map((v) => (
          <option value={v.slug} key={v.slug}>
            {v.title}
          </option>
        ))}
      </select>
      <div>Deskripsi</div>
      <CKEditor
        editor={ClassicEditor}
        data="<p style={{color:'black'}}>Masukan deskripsi  disini...</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          //   console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          //   console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          //   console.log("Focus.", editor);
        }}
      />
      {/* <div>Alamat</div>
      <input
        type={"text"}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      /> */}
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
        alt="img"
      />
      <MapContainer
        children={
          <GeoJSON
            attribution="&copy; credits due..."
            data={borderline?.coordinates}
          />
        }
        style={{ width: "100%", height: "300px", maxWidth: "700px" }}
        center={location.coordinates}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <OnClickEvent />
        <Marker position={location.coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Gap height={20} />
      <Button cancel={true} title={"Batal"} />
      <Button
        title={"Simpan"}
        disabled={disableButton}
        onClick={submitTouristObj}
      />
      {/* <button disabled={disableButton} onClick={submitTouristObj}>
        Simpan
    </button> */}
      <Gap height={100} />
    </main>
  );
}
