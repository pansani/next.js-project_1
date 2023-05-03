import React from "react";

export default function StaticsBlock(props: {
  paragraph: string;
  title: string;
}) {
  return (
    <div
      style={{
        width: "250px",
      }}
    >
      <h1
        style={{
          lineHeight: "1.15",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {props.title}
      </h1>
        
      <p
        style={{
          paddingTop: "20px",
          lineHeight: "1.2",
          fontSize: "20px",
          fontWeight: "normal",
        }}
      >
        {props.paragraph}
      </p>
    </div>
  );
}
