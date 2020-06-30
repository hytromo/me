import React from "react";
import styles from "./section.module.css";
import { titleToId } from "../../util/util";

interface OwnPropsI {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

export const Section = (props: OwnPropsI) => {
  return (
    <section id={titleToId(props.title)}>
      <hr className={styles.hr} />
      <h1 className={styles.title}>{props.title}</h1>
      <hr className={styles.hr} />
	  <br />
      {props.children}
    </section>
  );
};
