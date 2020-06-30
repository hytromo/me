import React from "react";
import styles from "./modal.module.css";

interface OwnPropsI {
  info: string;
  title: string;
  onClose: VoidFunction;
}

export const Modal = (props: OwnPropsI) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [contentRef.current]);

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      props.onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div
        ref={contentRef}
        tabIndex={0}
        onKeyDown={onKeyPress}
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.close} onClick={props.onClose}>
          &times;
        </span>
        <h2 style={{marginBottom: 0}}>{props.title}</h2>
		<hr style={{height: 3, backgroundColor: '#333'}}/>
		<p style={{marginTop: '3rem'}}>{props.info}</p>
      </div>
    </div>
  );
};
