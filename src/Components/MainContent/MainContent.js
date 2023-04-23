import OnlineAuctions from "./Content/OnlineAuctions";
import BreadCrumb from "./BreadCrumbs/BreadCrumb";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <div className={styles.mainContentBg}>
      <div className={styles.mainContent}>
        <BreadCrumb />
        <OnlineAuctions />
      </div>
    </div>
  );
}
