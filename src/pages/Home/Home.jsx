import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetPariwisataId } from "../../redux/slices/pariwisataSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <main>
      <h1>Home</h1>
      {[...new Array(7).keys()].map((value, index) => (
        <Link
          key={index}
          to="/pariwisata"
          onClick={() => dispatch(SetPariwisataId(index))}
        >
          <div>
            <h3>Judul Pariwisata {index}</h3>
          </div>
        </Link>
      ))}
    </main>
  );
}
