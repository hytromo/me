import React from "react";
import { titleToId } from "../../util/util";

interface OwnPropsI {
  titles: string[];
}

export const TitlesMenu = (props: OwnPropsI) => {
  return (
    <div
      style={{
		  textAlign: 'center',
		  marginBottom: '5rem'
      }}
    >
      {props.titles.map((title, index) => (
        <div key={index} style={{paddingBottom: '.5rem'}}>
          <a
            href={`#${titleToId(title)}`}
          >
            {title.toLowerCase()}
          </a>
          {index === props.titles.length - 1 ? null : null}
        </div>
      ))}
    </div>
  );
};
