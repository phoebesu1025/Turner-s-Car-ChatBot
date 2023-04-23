import styles from "./Footer.module.css";
import { FooterArray } from "./FooterArray";
export default function Footer() {
  return (
    <div className={styles.footerOuterBg}>
      <div className={styles.footerContainer}>
        {FooterArray.categories.map((category) => {
          return (
            <div className={styles.mapContainer}>
              <h2 className={styles.footerTitle}>{category.name}</h2>
              <div>
                {category.items.map((item) => {
                  return (
                    <ul>
                      <li>
                        <a href="/">{item.name}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
