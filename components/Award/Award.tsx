import React from "react";
import cv from "../../public/cv.json";
import { LinkifyText } from "../LinkifyText/LinkifyText";

interface OwnPropsI {
  award: typeof cv.awards[0];
}

export const Award = ({ award }: OwnPropsI) => {
  return (
    <div>
      <h2>{award.title}</h2>
      {award.date}
      <p>
        <LinkifyText>{award.summary}</LinkifyText>
      </p>
      Awarded by <b>{award.awarder}</b>
    </div>
  );
};
