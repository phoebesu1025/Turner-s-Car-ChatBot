import React from "react";
import styles from './TopNav.module.css'

export default function TopNav() {
  const TopNavArray = [
    "Cars",
    "Turners Subscription",
    "Trucks & Machinery",
    "Damaged & End of Lif",
    "Motorcycles",
    "General Goods",
    "Buses, Caravans & Motorhomes",
  ];
  return (
    <>
      <div className={styles.TopNav}></div>
    </>
  );
}
