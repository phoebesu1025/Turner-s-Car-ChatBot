import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./Faq.module.css";
import { OnlineAuctionArray } from "./OnlineAuction/OnlineAuctionArray";

export default function OnlineAuction() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <>
      <h2>Frequetnly Asked Questions about Online Auctions</h2>
      {OnlineAuctionArray.map((array, index) => {
        const isActive = index === activeIndex;
        const isLastItem = index === OnlineAuctionArray.length - 1; // Check if this is the last item

        return (
          <div
            key={index}
            className={`${styles.faqContainer} ${
              isLastItem ? styles.lastContainer : ""
            }`}
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
