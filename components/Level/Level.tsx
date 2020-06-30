import React from "react";
import cv from "../../public/cv.json";
import styles from "./level.module.css";
import { CircularPercentage } from "../CircularPercentage/CircularPercentage";
import { Modal } from "../Modal/Modal";

interface OwnPropsI {
  description: string;
  data?: typeof cv.skills[0]["keywordInfo"]["Typescript"];
}

const colors = ["#8fd0cc", "#385d70", "#69547f", "#f46569", "#ffa084"];
let colorIndex = 0;

export const Level = ({ description, data }: OwnPropsI) => {
  const [modalInfo, setModalInfo] = React.useState<{
    info: string;
    title: string;
  }>(null);

  const color = React.useMemo(() => colors[colorIndex++ % colors.length], []);

  if (data) {
    return (
      <>
        <div className={styles.level}>
          <CircularPercentage
            size={150}
            text={description}
            progress={data.level}
            filledStroke={color}
            hasInfo={!!data.moreInfo}
            onClick={
              !data.moreInfo
                ? null
                : () =>
                    setModalInfo({
                      title: description,
                      info: data.moreInfo,
                    })
            }
          />
        </div>
		{!modalInfo ? null : <Modal onClose={() => setModalInfo(null)} {...modalInfo} />}
      </>
    );
  }

  return <div className={styles.progressLess}>{description}</div>;
};
