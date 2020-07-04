import React from "react";
import cv from "../../public/cv.json";
import styles from "./layout.module.css";

export const ContactIcons = () => {
  return (
    <>
      <a href={`mailto:${cv.basics.email}`}>
        <img src="/mail.svg" alt="mail" />
      </a>
      <a href="skype:alexsolanos?chat">
        <img src="/skype.svg" alt="skype" />
      </a>
      <a href={`tel:${cv.basics.phone}`}>
        <img className={styles.phone} src="/phone.svg" alt="phone" />
      </a>
    </>
  );
};
