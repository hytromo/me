import React, { useEffect, useState, useRef } from "react";
import styles from "./circular-percentage.module.css";

interface OwnPropsI {
  progress: number;
  text: string;
  size?: number;
  strokeWidth?: number;
  filledStroke?: string;
  emptyStroke?: string;
  hasInfo?: boolean;
  onClick: VoidFunction;
}

const CircularPercentage = (props: OwnPropsI) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const {
    size = 200,
    hasInfo,
    progress,
    text: _text,
    strokeWidth = 5,
    emptyStroke = "#aaa",
    filledStroke = "#ff0000",
  } = props;

  const textParts = _text.split(" ");
  let text = "";
  for (const part of textParts) {
    if (text.length + part.length > 14) {
      break;
    }
    text += part + " ";
  }

  const maxStrokeWidth = strokeWidth + 5;

  const center = size / 2;
  const radius = size / 2 - maxStrokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, progress, offset]);

  return (
	<div
        onClick={props.onClick}
		 style={{ position: "relative" }} 
		 className={props.onClick ? styles.clickableSvg : ''}>
      <svg
		className={styles.svg}
		style={{cursor: props.onClick ? 'pointer' : 'default'}}
        width={size}
        height={size}
      >
        <circle
          className={styles.svgCircleBg}
          stroke={emptyStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles.svgCircle}
          ref={circleRef}
          stroke={filledStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={maxStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          x={`${center}`}
          y={`${center}`}
          className={styles.svgCircleText}
        >
          {text}
        </text>
      </svg>
      {!hasInfo ? null : (
        <a onClick={props.onClick} className={styles.info}>
          <img alt="info" title="more information" className={styles.infoImg} src="info.svg" />
        </a>
      )}
    </div>
  );
};

export default CircularPercentage;
export { CircularPercentage };
