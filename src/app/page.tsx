import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Guess the framework</h1>
        <p className={styles.description}>
          Guess the framework that you are using.
        </p>
        <Link href="/game" className={styles.button}>
          Start the game
        </Link>
      </div>
    </main>
  );
}
