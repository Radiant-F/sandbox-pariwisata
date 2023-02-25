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
  // const [image, setImage] = useState(null);
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
  const [address, setAddress] = useState("");

  function submitTouristObj() {
    const formData = {
      name,
      // image,
      price,
      category,
      description,
      address,
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
    name === "" || price === "" || category === "" || description === "";
  // image === null ||

  return (
    <main style={{ flex: 1 }}>
      <div className={styles.textTitle}>Tambah Wisata</div>
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Nama</p>
      <input
        className={styles.formInput}
        type={"text"}
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder={"Masukan nama wisata"}
      />
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Harga</p>
      <input
        className={styles.formInput}
        type={"number"}
        name="harga"
        onChange={(e) => setPrice(e.target.value)}
        placeholder={"Rp"}
      />
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Kategori</p>
      <div className={styles.formInputPicker}>
        <select
          className={styles.formPicker}
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {category.map((v) => (
            <option value={v.slug} key={v.slug}>
              {v.title}
            </option>
          ))}
        </select>
      </div>
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Deskripsi</p>
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
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Alamat</p>
      {/* <input
        className={styles.formInput}
        type={""}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      /> */}
      <textarea
        className={styles.formInput}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={"Jalan sekian nomor sekian.."}
        id="message"
        name="message"
        rows="4"
        cols="50"
        draggable={"false"}
      />
      {/* <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
        alt="img"
      /> */}
      <Gap height={30} />
      <div className={styles.mapContainer}>
        <MapContainer
          children={
            <GeoJSON
              attribution="&copy; credits due..."
              data={borderline?.coordinates}
            />
          }
          style={{
            width: "100%",
            height: "300px",
            maxWidth: "700px",
          }}
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
      </div>
      <Gap height={50} />
      <div className={styles.btnAction}>
        <Button cancel={true} title={"Batal"} />
        <Gap width={20} />
        <Button
          title={"Simpan"}
          disabled={disableButton}
          onClick={submitTouristObj}
        />
      </div>
      <Gap height={100} />
    </main>
  );
}
