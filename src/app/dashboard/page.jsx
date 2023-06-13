"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr"
import styles from "./page.module.css"

/* SWR FETCH VS FETCH API 
Verilere başarıyla ulaştığımız senaryoda asıl sihir ve Fetch API'den farklı olan kısım burada başlıyor. 
İlk istekten gelen önbelleğe alınmış verilere zaten sahip olduğumuz için, bu verileri doğrudan kullanıcı arayüzünde gösterebiliriz. 
Kullanıcı deneyimi açısından ne kadar önemli olduğunu bir düşünün lütfen. Aynı sayfaya asla eli boş gelmezsiniz.
SWR size eskimiş verileri gösterirken aynı zamanda tekrar sunucuya istek gönderir. 
Bu sayede değişen veriler varsa, bunlar da UI'ye yansıtılacaktır.


*/

function Dashboard() {
    const session = useSession()
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        `/api/blogPosts?username=${session?.data?.user.name}`,
        fetcher
    );

    console.log(data, "datam");

    if (session.status === "loading") {
        return <p>Loading</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const desc = e.target[1].value
        const img = e.target[2].value
        const content = e.target[3].value

        try {
            await fetch("/api/blogPosts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    content,
                    username: session.data.user.name,
                }),
            });
            mutate()
        } catch (error) {
            console.log(error);
        }

    }

    const handleRemove = async (id) => {
        try {
            await fetch(`/api/blogPosts/${id}`, {
                method: "DELETE"
            })
            mutate()
        } catch (error) {
            console.log(error);
        }
    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {data?.map(post => (
                        <div className={styles.post} key={post._id}>
                            <div className={styles.imgContainer}>
                                <Image src={post.img} alt="" width={200} height={100} />
                            </div>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <span className={styles.delete} onClick={() => handleRemove(post._id)}>X</span>
                        </div>
                    ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1>Add New Post</h1>
                    <input type="text" placeholder="Title" className={styles.input} />
                    <input type="text" placeholder="Desc" className={styles.input} />
                    <input type="text" placeholder="Image" className={styles.input} />
                    <textarea placeholder="Content" className={styles.textArea} cols={30} rows={10}></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        )
    }
}

export default Dashboard;
