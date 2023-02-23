// import React, { useState } from "react";
// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMapEvent,
// } from "react-leaflet";

// export default function LibsDemo() {
//   const [position, setPosition] = useState([50.5, 30.5]);

//   function MyComponent() {
//     const map = useMapEvent("click", ({ latlng }) => {
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
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MyComponent />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function LibsDemo() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", image);
    formData.append("address", "Glagah Lor Coy");

    axios
      .patch(
        "https://api-entrytest.sandboxindonesia.id/api/user/user/me/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTY1NjQ0LCJpYXQiOjE2NzcxNDQwNDQsImp0aSI6IjI5Mjg2M2Q2ODI0ODRkNTVhMzE4YzYyZDVlNGI0YzE1IiwidXNlcl9pZCI6Mn0.4iyzFNVMeM16o3Yo1ElsufZ4B5Q83IhzHP-uro94p5Q`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={handleImageChange} />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}
