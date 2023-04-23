import {
  FaHome,
  FaFacebookF,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";

import styles from "./Footer.module.css";
export default function FooterNav() {
  return (
    <div className={styles.footerOuterBg}>
      <div className={styles.footerNavContainer}>
        <div className={styles.footerNavFlex}>
          <div className={styles.copyright}>© 2022 Turners</div>
          <div className={styles.socialBlock}>
            <a href="/Company/Branches/">
              <span className={styles.icon}>
                <FaHome />
              </span>
              Branch Details
            </a>
            <a href="http://www.facebook.com/turnersNZ">
              <span className={styles.icon}>
                <FaFacebookF />
              </span>
              Facebook
            </a>
            <a href="/Company/email-alerts/email-newsletters/">
              <span className={styles.icon}>
                <FaRegEnvelope />
              </span>
              Newsletter
            </a>
            <a href="/Company/email-alerts/email-alerts/">
              <span className={styles.icon}>
                <FaRegEnvelope />
              </span>
              Email Alerts
            </a>
            <a href="https://www.instagram.com/turners_cars">
              <span className={styles.icon}>
                <FaInstagram />
              </span>
              Instagram
            </a>

            <img
              src="https://content.tgstatic.co.nz/webassets/assets/images/shieldedSite/shielded-site-logo.png"
              alt="Women's Refuge Shield"
              id="shieldedSite"
              style={{ opacity: "1" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
