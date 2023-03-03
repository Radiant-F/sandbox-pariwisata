import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import { Gap } from "../../assets";
import { TouristObject } from "../../features/UserTourist";

export default function UserTourist() {
  const { pathname } = useLocation();
  const currentPath = pathname === "/profile/tourist";
  return (
    <main className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to={"/profile"} className={styles.textLink}>
          Profil Saya
        </Link>
        <Gap height={20} />
        <Link
          to={"/profile/tourist"}
          className={styles.textLink}
          style={{
            color: currentPath ? "#f7911a" : "black",
            fontWeight: currentPath ? "bold" : "normal",
          }}
        >
          Wisata Saya
        </Link>
      </div>
      <TouristObject />
    </main>
  );
}
