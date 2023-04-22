import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import styles from "./SubNav.module.css";
export default function SubNav() {
  return (
    <div className={styles.largeScreenMainMenu}>
      <div className={styles.contentMaxWidth}>
        <ul className={styles.leftMenu}>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              <FaSearch style={{ marginRight: "0.5rem" }} />
              Find a Car
            </a>
          </li>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              How to Buy
              <RiArrowDropDownLine className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              Sell your Car
              <RiArrowDropDownLine className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              Finance & Insurance
              <RiArrowDropDownLine className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              Turners Subscription
              <RiArrowDropDownLine className={styles.icon} />
            </a>
          </li>
        </ul>

        <ul className={styles.rightMenu}>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              Auctions
              <RiArrowDropDownLine className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="/" className={styles.subMenuTrigger}>
              Services & Info
              <RiArrowDropDownLine className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
