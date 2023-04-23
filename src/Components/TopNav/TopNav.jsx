import React from "react";
import { FaMapMarkerAlt, FaUserAlt, FaSearch, FaBars } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import styles from "./TopNav.module.css";

export default function TopNav() {
  return (
    <>
      <nav className={styles.headerTopMenu}>
        <a href="/">Cars</a>
        <a href="/">Turners Subscription</a>
        <a href="/">Trucks & Machinery</a>
        <a href="/">Damaged & End of Lif</a>
        <a href="/">Motorcycles</a>
        <a href="/">General Goods</a>
        <a href="/">Buses, Caravans & Motorhomes</a>
      </nav>
      <div className={styles.topNavContainer}>
        <a href="/" className={styles.logo}>
          <img src="./images/logo.png" alt="" />
        </a>

        <div className={styles.headerAccountLinks}>
          <div className={styles.accountPanelTriggerContainer}>
            <FaUserAlt />
            <a href="/"> LOGIN </a>
            <span className={styles.or}>OR </span>
            <a href="/">REGISTER</a>
          </div>
          <div>
            <BsFillTelephoneFill />
            <a href="/"> 0800 887 637</a>
          </div>
          <div>
            <FaMapMarkerAlt />
            <a href="/"> Find Us</a>
          </div>

          <div>
            <a href="/" className={styles.headerChineseLink}>
              {" "}
              中文
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
