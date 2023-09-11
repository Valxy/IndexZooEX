import React from "react";
import styles from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { Height } from "@mui/icons-material";

const JoinZoo = () => {
  return (
    <div className={styles.join_box}>
      <div className={styles.join_title}>Join the Zoo</div>
      <div className={styles.join_info_box}>
        <Button className={styles.join_info} onClick={() => {}}>
          <img
            src="/twitter.png"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px"
            }}
          ></img>
          <div className={styles.join_info_text}>Twitter</div> 
        </Button>

        <Button className={styles.join_info}>
          <img
            src="/discord.png"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px"
            }}
          ></img>
          <div className={styles.join_info_text}>Discord</div>
        </Button>

        <Button className={styles.join_info}>
          <img
            src="/telegram.png"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px"
            }}
          ></img>
          <div className={styles.join_info_text}>Telegram</div>
        </Button>

        <Button className={styles.join_info}>
          <img
            src="/reddit.png"
            style={{
              paddingLeft: "20px",
              paddingTop: "16px",
              paddingBottom: "16px",
              height: "70px"
            }}
          ></img>
          <div className={styles.join_info_text}>Reddit</div>
        </Button>
      </div>
      <div style={{
        width:"100%",
        height:"auto",
        justifyContent:"center"
      }}>
        <img src="/bull_w_bkg.jpg" className={styles.bull_w_bkg}></img>  
      </div>
    </div>
  );
};

export default JoinZoo;
