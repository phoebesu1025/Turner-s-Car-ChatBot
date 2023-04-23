import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./Faq.module.css";
import { AutobidsArray } from "./Autobids/AutoBidsArray";

export default function Autobids() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <>
      <h2>Autobids</h2>
      {AutobidsArray.map((array, index) => {
        const isActive = index === activeIndex;
        const isLastItem = index === AutobidsArray.length - 1; // Check if this is the last item

        return (
          <div
            key={index}
            className={`${styles.faqContainer} ${isLastItem ? styles.lastContainer : ""}`}
          >
            <div className={styles.faqQuestion}>
              <div>{array.question}</div>
              <div className={styles.icon} onClick={() => handleClick(index)}>
                {isActive ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {isActive && <div>{array.answer}</div>}
          </div>
        );
      })}
    </>
  );
}
