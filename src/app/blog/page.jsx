import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/blogPosts', {
        // next: { revalidate: 10 } // her 10 sn de tekrar çekecek cache lifetime bu
        cache: "no-store" // data sürekli değişiyorsa bu
    });
    // Bir şey yapmazsak cache'ler bunu

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary 
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

async function Blog() {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data?.map((item) => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog;
