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
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: '#fff',
        justifyContent: 'center',
        paddingTop: '80px',
        rowGap: '80px',
        columnGap: '10px',
        
      }}>
        <StaticsBlock
          title="1"
          paragraph="Escolha um projeto que
      te traga interesse"
        ></StaticsBlock>
        <StaticsBlock
          title="2"
          paragraph="Foque a sua energia em
      uma habilidade por vez 
      "
        ></StaticsBlock>
        <StaticsBlock
          title="3"
          paragraph="Defina o seu nível alvo
        de performance"
        ></StaticsBlock>
        <StaticsBlock
          title="4"
          paragraph="Desconstrua a
        habilidade em subhabilidades"
        ></StaticsBlock>
        <StaticsBlock
          title="5"
          paragraph="Obtenha ferramentas
        críticas"
        ></StaticsBlock>
        <StaticsBlock
          title="6"
          paragraph="Elimite as barreiras para
        praticar"
        ></StaticsBlock>
        <StaticsBlock
          title="7"
          paragraph="Dedique tempo para a
        prática"
        ></StaticsBlock>
        <StaticsBlock
          title="8"
          paragraph="Crie ciclos de feedback
        rápidos"
        ></StaticsBlock>
        <StaticsBlock
          title="9"
          paragraph="Pratique usando o
        relógio, em intervalos
        curtos de tempo"
        ></StaticsBlock>
        <StaticsBlock
          title="10"
          paragraph="Dê ênfase a quantidade
        e velocidade"
        ></StaticsBlock>
      </div>
    </div>
  );
}
