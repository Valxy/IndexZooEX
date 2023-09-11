import React from "react";
import styles from "./index.module.css";

const stats = () => {
  return (
    <div className={styles.container_box}>
      <img src="/Rectanglebg.png" className={styles.bg} />
      <div className={styles.value_box}>
        <div className={styles.item_box} style={{
          flex:'426'
        }}>
          <div className={styles.item_img1}></div>

          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Trading Volume</div>
            <div className={styles.item_value}>$108,892,466,791</div>
          </div>
        </div>

        <div className={styles.sep_bar}></div>

        <div
          className={styles.item_box}
          style={
            {
              // width: "377.64px",
              flex:'351'
            }
          }
        >
          <div className={styles.item_img2}></div>
          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Jackpot Number</div>
            <div className={styles.item_value}>$215,819,063</div>
          </div>
        </div>

        <div className={styles.sep_bar}></div>

        <div
          className={styles.item_box}
          style={
            {
              flex:'342'
              // width: "370.54px",
            }
          }
        >
          <div className={styles.item_img3}></div>
          <div className={styles.item_right}>
            <div className={styles.item_text_title}>Total Users</div>
            <div className={styles.item_value}>249,031</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
