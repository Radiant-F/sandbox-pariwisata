import React from "react";
import { Link } from "react-router-dom";
import { Gap } from "../../assets";
import { UserProfile } from "../../features/Profile";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const { pathname } = useLocation();
  const currentPath = pathname === "/profile";
  return (
    <main className={styles.container}>
      <div className={styles.linkContainer}>
        <Link
          to={"/profile"}
          className={styles.textLink}
          style={{
            color: currentPath ? "#f7911a" : "black",
            fontWeight: currentPath ? "bold" : "normal",
          }}
        >
          Profil Saya
        </Link>
        <Gap height={20} />
        <Link to={"/profile/tourist"} className={styles.textLink}>
          Wisata Saya
        </Link>
      </div>
      <UserProfile />
    </main>
  );
}
