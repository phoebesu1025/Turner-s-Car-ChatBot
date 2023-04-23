import React from "react";

import styles from "../MainContent/MainContent.module.css";
import OnlineAuction from "./OnlineAuction";
import Autobids from "./Autobids";

export default function Faq() {
  return (
    <div className={styles.mainContentBg}>
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <h2>Online Auctions Frequently asked questions</h2>

          <p style={{ lineHeight: "1.25em" }}>
            <br />
            Below are some FAQs that will help you learn more about online
            auctions.
          </p>

          <OnlineAuction />
          <Autobids />
        </div>
      </div>
    </div>
  );
}
