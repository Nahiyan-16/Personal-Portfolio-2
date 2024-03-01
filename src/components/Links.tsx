import React from "react";

export default function Links(props: {
  link: string | undefined;
  source: string | undefined;
  alternative: string | undefined;
  width: any;
}) {
  return (
    <div className="personalLinksLogo">
      <a href={props.link}>
        <img
          src={props.source}
          alt={props.alternative}
          style={{ width: props.width }}
        />
      </a>
    </div>
  );
}
