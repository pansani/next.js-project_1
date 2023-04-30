import React from "react";
import StaticsBlock from "./StaticsBlock";

export default function StaticsSection() {
  return (
    <div>
      <h1
        style={{
          lineHeight: "1.15",
          fontSize: "60px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Fatos e Numeros
      </h1>
      <h2
        style={{
          lineHeight: "34px",
          fontSize: "24px",
          fontWeight: "normal",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Sobre o cérebro e o aprendizado
      </h2>
      <div style={{
        width: '1100px'
      }}>
        <StaticsBlock
          title="86 bilhoes"
          paragraph="O número de neurônios no
        cérebro humano"
        ></StaticsBlock>
        <StaticsBlock
            title="73%"
            paragraph=""
        ></StaticsBlock>
        <StaticsBlock
            title=""
            paragraph=""
        ></StaticsBlock>
        <StaticsBlock
            title=""
            paragraph=""
        ></StaticsBlock>
        <StaticsBlock
            title=""
            paragraph=""
        ></StaticsBlock>
        <StaticsBlock
            title=""
            paragraph=""
        ></StaticsBlock>
        <StaticsBlock
            title=""
            paragraph=""
        ></StaticsBlock>
        <StaticsBlock
            title=""
            paragraph=""
        ></StaticsBlock>
      </div>
    </div>
  );
}
