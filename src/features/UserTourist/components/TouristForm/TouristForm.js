import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddUserTourist,
  fetchMapBorder,
  fetchTouristCategory,
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
import { useNavigate } from "react-router-dom";

export default function TouristForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status_borderline, status_category, tourist_category, borderline } =
    useSelector((state) => state.tourist_obj);

  useEffect(() => {
    if (status_borderline === "idle") dispatch(fetchMapBorder());
  }, [status_borderline, dispatch]);
  useEffect(() => {
    if (status_category === "idle") dispatch(fetchTouristCategory());
  }, [status_category, dispatch]);

  const [name, setName] = useState("");
  // const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    tourist_category[0].slug
  );
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({
    type: "Point",
    coordinates: [-6.175395, 106.827201],
  });

  function submitTouristObj() {
    const formData = {
      name,
      image: null,
      price,
      category: selectedCategory,
      description,
      address,
      location,
    };
    // console.log(formData);
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
    price === "" ||
    selectedCategory === "memuat" ||
    description === "";
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
        value={name}
      />
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Harga</p>
      <input
        className={styles.formInput}
        type={"number"}
        name="harga"
        onChange={(e) => setPrice(e.target.value)}
        placeholder={"Rp"}
        value={price}
      />
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Kategori</p>
      <div className={styles.formInputPicker}>
        <select
          className={styles.formPicker}
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {tourist_category.map((v) => (
            <option value={v.slug} key={v.slug}>
              {v.label}
            </option>
          ))}
        </select>
      </div>
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Deskripsi</p>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Masukan deskripsi  disini...</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          //   console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          //   console.log("Focus.", editor);
        }}
      />
      <p style={{ fontFamily: "Poppins Semi Bold" }}>Alamat</p>
      <textarea
        className={styles.formInput}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
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
        <Button
          cancel={true}
          title={"Batal"}
          onClick={() => navigate("/profile/tourist")}
        />
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
