import styles from "./BreadCrumb.module.css";
export default function BreadCrumb() {
  return (
    <div className={styles.breadcrumbsModule}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Cars</a>
        </li>
        <li>
          <a href="/">How to Buy</a>
        </li>
        <li>
          <a href="/">Online Auctions</a>
        </li>
      </ul>
    </div>
  );
}
