import React from "react";
import styles from "./Styles/FoodItem.module.css";

const FoodItem = ({ name, price, imgSrc, details }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt="food" className={styles.image} />
      </div>
      <div className={styles.detailsWrapper}>
        <h3>{name}</h3>
        <p className={styles.details}>{`Price: ${`${price}`}`}</p>
      </div>
      <div id={styles.infoWrapper}>
        <p>{`${details}`}</p>
      </div>
    </div>
  );
};

export default FoodItem;