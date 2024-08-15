import styles from "./page.module.css";
import "./globals.css";

export const metadata = {
  title: "Guess the framework",
  description: "Guess the framework that you are using",
  icons: {
    icon: "../public/logo.webp",
  },
  openGraph: {
    title: "Guess the framework",
    description: "Guess the framework that you are using",
    url: "https://guess-the-framework.vercel.app",
    siteName: "Guess the framework",
    images: [
      {
        url: "../public/logo.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
        <footer>
          <p>Created by: Matias fandiño </p>
          <a
            href="https://github.com/matifandy8"
            target="_blank"
            rel="noreferrer noopener"
            className="footer__link"
          >
            Github
          </a>
        </footer>
      </body>
    </html>
  );
}
