import React from "react";
import styles from "./modal.module.css";
import { ImageWithFallback } from "../Image/ImageWithFallback";

export interface ModalPropsI {
  info: string;
  title: string;
  pictures?: Array<{
    alt: string;
    description: string;
    previewSrc: string;
    src: string;
    fallbackExtension: string;
  }>;
  onClose: VoidFunction;
}

export const Modal = (props: ModalPropsI) => {
  const { pictures, onClose, info, title } = props;
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [activePictureIndex, setActivePictureIndex] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [contentRef.current]);

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const selectedPicture = pictures?.[activePictureIndex];

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        ref={contentRef}
        tabIndex={0}
        onKeyDown={onKeyPress}
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2 className={styles.title}>{title}</h2>
        <hr style={{ height: 3, backgroundColor: "#333" }} />
        <p style={{ marginTop: "3rem" }}>{info}</p>
        {!pictures?.length ? null : (
          <>
            <h3 className={styles.picturesTitle}>Pictures</h3>
            <hr style={{ marginBottom: "2rem" }} />
            {!selectedPicture ? null : (
              <div>
                <div className={styles.selectedPicture}>
                  <ImageWithFallback
                    onClick={() => {
                      window.open(selectedPicture.src, "_blank").focus();
                    }}
                    extraClass={styles.selectedPictureImg}
                    {...selectedPicture}
                  />
                </div>
                <div className={styles.selectedPictureDescription}>
                  {selectedPicture.description}
                </div>
              </div>
            )}
            <div className={styles.previewsWrap}>
              {pictures?.map((picture, index) => (
                <ImageWithFallback
                  key={index}
                  {...{
                    ...picture,
                    src: picture.previewSrc,
                    onClick: () => setActivePictureIndex(index),
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
