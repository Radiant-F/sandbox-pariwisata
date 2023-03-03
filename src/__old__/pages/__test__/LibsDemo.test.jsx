// import React, { useState } from "react";
// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMapEvent,
//   GeoJSON,
// } from "react-leaflet";
// import data from "./data.geojson";

// export default function LibsDemo() {
//   const [position, setPosition] = useState([-6.17562, 106.82715]);

//   function OnClickEvent() {
//     useMapEvent("click", ({ latlng }) => {
//       console.log(latlng);
//       setPosition([latlng.lat, latlng.lng]);
//     });
//     return null;
//   }

//   return (
//     <MapContainer
//       style={{ width: "100%", height: "100vh" }}
//       center={position}
//       zoom={13}
//       scrollWheelZoom={true}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <OnClickEvent />
//       <GeoJSON data={data} style={{ fillColor: "#088", fillOpacity: 0.8 }} />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function LibsDemo() {
//   const [image, setImage] = useState(null);
//   const [title, setTitle] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("photo", image);
//     formData.append("address", "Glagah Lor Coy");

//     axios
//       .patch(
//         "https://api-entrytest.sandboxindonesia.id/api/user/user/me/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTY1NjQ0LCJpYXQiOjE2NzcxNDQwNDQsImp0aSI6IjI5Mjg2M2Q2ODI0ODRkNTVhMzE4YzYyZDVlNGI0YzE1IiwidXNlcl9pZCI6Mn0.4iyzFNVMeM16o3Yo1ElsufZ4B5Q83IhzHP-uro94p5Q`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input type="file" name="image" onChange={handleImageChange} />
//       </div>
//       <div>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={handleTitleChange}
//         />
//       </div>
//       <button type="submit">Upload</button>
//     </form>
//   );
// }

// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import React from "react";

// export default function LibsDemo() {
//   return (
//     <div>
//       <CKEditor
//         editor={ClassicEditor}
//         data="<p>Hello from CKEditor</p>"
//         onReady={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           console.log("Editor is ready to use!", editor);
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           console.log({ event, editor, data });
//         }}
//         onBlur={(event, editor) => {
//           console.log("Blur.", editor);
//         }}
//         onFocus={(event, editor) => {
//           console.log("Focus.", editor);
//         }}
//       />
//     </div>
//   );
// }

// import React, { Component } from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import mydata from "./data.geojson";

// class LibsDemo extends Component {
//   render() {
//     return (
//       <MapContainer center={[40, -74.5]} zoom={9}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <GeoJSON
//           data={mydata}
//           style={{ fillColor: "#088", fillOpacity: 0.8 }}
//         />
//       </MapContainer>
//     );
//   }
// }

// export default LibsDemo;

export default function LibsDemo() {
  const token = "238rcyn92weuihfh29cnrh9wehfch29crn938crhn98chwsf";

  return (
    <main style={{ height: "100vh" }}>
      <p>LibsDemo</p>
      <button
        onClick={() => {
          localStorage.setItem("token", JSON.stringify(token));
        }}
      >
        Simpan data
      </button>
      <button
        onClick={() => {
          const token = localStorage.getItem("token");
          console.log(JSON.parse(token));
        }}
      >
        Lihat data
      </button>
      <button
        onClick={() => {
          localStorage.setItem("token", JSON.stringify(token + " update"));
        }}
      >
        Ubah data
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Hapus data
      </button>
    </main>
  );
}
