import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";
import { ImageWithFallback } from "../Image/ImageWithFallback";
import cv from "../../public/cv.json";
import { NormalIcons } from "./NormalIcons";
import { ContactIcons } from "./ContactIcons";

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
        <div className={styles.mobileIcons}></div>
        <div className={styles.topLeft}>
          <NormalIcons />
        </div>
        <div className={styles.topRight}>
          <ContactIcons />
        </div>
        <div className={styles.mobileIcons}>
          <NormalIcons />
          <ContactIcons />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
