import React from "react";
import StaticsBlock from "./StaticsBlock";

export default function Kaufman() {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#1F1F1F",
        paddingTop: "90px",
        paddingBottom: "90px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          width: "60%",
          lineHeight: "1.15",
          fontSize: "60px",
          fontWeight: "bold",
          zIndex: "1",
          color: "#FFF",
        }}
      >
        Dez princípios para adquirir habilidades de forma rápida
      </h1>
      <h3
        style={{
          zIndex: "1",
          color: "#FFF",
          lineHeight: "34px",
          fontSize: "24px",
          fontWeight: "normal",
          marginTop: "20px",
        }}
      >
        por Josh Kaufman
      </h3>
      <StaticsBlock 
      title="1" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="2" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="3" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="4" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="5" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="6" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="7" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="8" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="9" 
      paragraph=""
      ></StaticsBlock>
      <StaticsBlock 
      title="10" 
      paragraph=""
      ></StaticsBlock>
    </div>
  );
}
