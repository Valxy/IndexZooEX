import React from "react";
import styles from "./index.module.css";
import { ClassNames } from "@emotion/react";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_top}>
                <div className={styles.left_container}>
                    <img src={"/logo.png"} alt="zoo logo" />
                    <p className={styles.left_container_text}>
                        ZooEx is a decentralized margin trading protocol that
                        enables leverage trading for any tokens.
                    </p>
                    <p className={styles.left_container_email}>contact@ZooEx.com</p>
                </div>
                <div className={styles.right_container}>
                    <div className={styles.links_container}>
                        <h3 className={styles.category}>About Us</h3>
                        <p>About Us</p>
                        <p>Gitbook</p>
                        <p>GitHub</p>
                        <p>Medium</p>
                        <p>Press Kit</p>
                    </div>
                    <div className={styles.links_container}>
                        <h3 className={styles.category}>Our Products</h3>
                        <p>IndexZoo</p>
                        <p>ZooEx</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>ZooEx ©2023.</p>
            </div>
        </div>
    );
};

export default Footer;