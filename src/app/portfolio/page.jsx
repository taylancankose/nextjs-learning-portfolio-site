import React from "react";
import styles from "./page.module.css"
import Link from "next/link";

function Portfolio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations"
                    className={styles.item}
                >
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites"
                    className={styles.item}
                >
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href="/portfolio/applications"
                    className={styles.item}
                >
                    <span className={styles.title}>Apps</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio;

/* Sayfanın altında herhangi bir alt sayfaya girdiğimde
aynı figür, başlık veya bir şey görürsem bunu layout olarak koyuyorum */ 