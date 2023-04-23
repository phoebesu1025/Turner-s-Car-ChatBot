import { FiChevronsRight } from "react-icons/fi";
import styles from "./BreadCrumb.module.css";
export default function BreadCrumb() {
  return (
    <div className={styles.breadcrumbsModule}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <FiChevronsRight className={styles.icon} />
        <li>
          <a href="/">Cars</a>
        </li>
        <FiChevronsRight className={styles.icon} />
        <li>
          <a href="/">How to Buy</a>
        </li>
        <FiChevronsRight className={styles.icon} />
        <li>
          <a href="/">Online Auctions</a>
        </li>
      </ul>
    </div>
  );
}
