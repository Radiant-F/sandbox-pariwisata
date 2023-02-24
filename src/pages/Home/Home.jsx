import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SetTouristId } from "../../redux/slices/touristObjSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <main>
      <h1>Wisata</h1>
      {[...new Array(7).keys()].map((value, index) => (
        <Link
          key={index}
          to="/tourist"
          onClick={() => dispatch(SetTouristId(index))}
        >
          <div>
            <h3>Dummy Pariwisata {index}</h3>
          </div>
        </Link>
      ))}
    </main>
  );
}
