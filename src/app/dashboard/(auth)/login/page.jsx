"use client"
import React, { useState } from "react";
import styles from "./page.module.css"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
    const session = useSession()
    const router = useRouter()

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password,
        });
    };

    return <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="email" className={styles.input} />
            <input type="password" placeholder="password" className={styles.input} />
            <button className={styles.button}>Login</button>
        </form>
        <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
}

export default Login;
