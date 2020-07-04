import React from "react";
import styles from "./titles-menu.module.css";
import { titleToId } from "../../util/util";

interface OwnPropsI {
  titles: string[];
}

export const TitlesMenu = (props: OwnPropsI) => {
  return (
    <>
      <div className={styles.menu}>
        {props.titles.map((title, index) => (
          <div key={index} className={styles.entry}>
            <a href={`#${titleToId(title)}`}>{title.toLowerCase()}</a>
            {index === props.titles.length - 1 ? null : null}
          </div>
        ))}
      </div>
    </>
  );
};
