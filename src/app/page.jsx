"use client"
import Image from "next/image"
import React from "react"
import heroPNG from "public/hero.png"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

/* User Interaction lazım olduğunda client side kullanacaksın 
mesela => navbar'daki logout buttonunda auth kullanırken 

Data değişmiyorsa cache, değişiyo ama belirli bir aralıkla ise revalidate: time şeklinde yapabilirsin veya dynamic yapabilirsin
*/

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the
          global text industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={heroPNG} alt="homeIcon" className={styles.img} />
      </div>
    </div>
  )
}
