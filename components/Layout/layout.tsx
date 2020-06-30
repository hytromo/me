import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";
import { ImageWithFallback } from "../Image/ImageWithFallback";
import cv from "../../public/cv.json";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
		<meta name="og:image" content="https://hytromo.github.io/face.jpeg" />
        <meta name="og:title" content={cv.basics.name} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <ImageWithFallback
          alt="My face"
          src="/face.webp"
          fallbackExtension="jpeg"
          extraClass={styles.faceImage}
        />
        <div className={styles.name}>{cv.basics.name}</div>
        <div>{cv.work[0].position}</div>
        <div className={styles.topLeft}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alex-solanos-160709a7/"
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hytromo"
          >
            <img src="/github.svg" alt="github" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="/cv.pdf">
            <img className={styles.cv} src="/cv.svg" alt="cv" />
          </a>
        </div>
        <div className={styles.topRight}>
          <a href={`mailto:${cv.basics.email}`}>
            <img src="/mail.svg" alt="mail" />
          </a>
          <a href="skype:alexsolanos?chat">
            <img src="/skype.svg" alt="skype" />
          </a>
          <a href={`tel:${cv.basics.phone}`}>
            <img className={styles.phone} src="/phone.svg" alt="phone" />
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
