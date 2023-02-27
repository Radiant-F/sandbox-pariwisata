import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Gap, ImgTouristObj } from "../../assets";
import { SetTouristId } from "../../redux/slices/touristObjSlice";
import styles from "./index.module.css";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <main>
      <p className={styles.title}>Wisata</p>
      <div className={styles.cardContainer}>
        {[...new Array(7).keys()].map((value, index) => (
          <Link
            key={index}
            to="/tourist"
            onClick={() => dispatch(SetTouristId(index))}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.cardContent}>
              <img
                src={ImgTouristObj}
                style={{ width: "100%", borderRadius: "10px" }}
                alt="tourist"
              />
              <Gap height={10} />
              <div className={styles.divDetail}>
                <div className={styles.divCategory}>
                  <p className={styles.textCategory}>PEGUNUNGAN</p>
                </div>
                <p style={{ fontFamily: "Poppins Medium", color: "#1F2F59" }}>
                  Rp. 15.000
                </p>
              </div>
              <Gap height={10} />
              <p className={styles.textTitle}>Judul Dummy</p>
              <p className={styles.textDesc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                consectetur ducimus deserunt quo placeat nihil omnis quidem
                libero.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
