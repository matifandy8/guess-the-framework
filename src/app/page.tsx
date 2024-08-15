import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Guess the framework</h1>
        <p className={styles.description}>
          Game where you have to guess the name of the framework
        </p>
        <Link href="/game" className={styles.button}>
          Start the game
        </Link>
      </div>
    </main>
  );
}
