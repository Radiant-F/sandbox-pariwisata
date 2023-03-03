import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import { Gap } from "../assets";

export default function ProfileLayout({ children }) {
  const { pathname } = useLocation();
  const currentPath = pathname === "/profile/tourist" || "/profile/tourist/add";
  return (
    <main className={styles.container}>
      <div className={styles.linkContainer}>
        <Link
          to={"/profile"}
          className={styles.textLink}
          style={{
            color: pathname === "/profile" ? "#f7911a" : "black",
            fontWeight: pathname === "/profile" ? "bold" : "normal",
          }}
        >
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
      {children}
    </main>
  );
}
