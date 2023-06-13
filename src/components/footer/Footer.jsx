"use client"
import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

function Footer() {
    console.log("hello");
    return <div className={styles.container}>
        <div>©2023 Tecosama. All rights reserved.</div>
        <div className={styles.social}>
            <Image src="/1.png" className={styles.icon} width={20} height={20} alt="Teco Dev Facebook" />
            <Image src="/2.png" className={styles.icon} width={20} height={20} alt="Teco Dev Instagram" />
            <Image src="/3.png" className={styles.icon} width={20} height={20} alt="Teco Dev Twitter" />
            <Image src="/4.png" className={styles.icon} width={20} height={20} alt="Teco Dev Youtube" />
        </div>
    </div>
}

export default Footer;
