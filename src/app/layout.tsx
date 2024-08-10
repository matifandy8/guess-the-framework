import styles from "./page.module.css";

export const metadata = {
  title: "Guess the framework",
  description: "Guess the framework that you are using",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
