import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";

export default function Dashboard() {
  return (
    <div className={styles.box_container}>
      <div className={styles.left_box}>
        <div className={styles.left_box_title}>
          {`Unleash your\ntrading power\nwith ZooEx`}
        </div>
        <div className={styles.left_box_info}>
          {`ZooEx is a decentralized margin trading protocol that enables leverage trading for any tokens`}
        </div>
        <div className={styles.enter_box}>
          <Button className={styles.enter_but}>
            Enter Zoo
          </Button>
        </div>
      </div>
      <div className={styles.right_box}>
        <img
          src={"/oneRightValue1.png"}
          alt=""
          className={styles.right_box_img}
        />
        <img
          src={"/needle.gif"}
          alt=""
          className={styles.needle}
        />
      </div>
      {/* <div className={styles.right_box}>
        <img
          src={"/dashboard.gif"}
          alt=""
          className={styles.dash}
        />
        <img
          src={"/dashboardBkg.png"}
          alt=""
          className={styles.dash_bkg}
        />
      </div> */}
    </div>
  );
}
