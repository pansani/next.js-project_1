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
      <div
        style={{
          width: "1100px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "0 auto",
          paddingTop: "60px",
          rowGap: "60px",
          paddingBottom: '60px'
        }}
      >
        <StaticsBlock
          title="86 bilhoes"
          paragraph="O número de neurônios no
        cérebro humano"
        ></StaticsBlock>
        <StaticsBlock
          title="73%"
          paragraph="A porcentagem de adultos nos
            EUA que se consideram
            aprendizes para a vida toda"
        ></StaticsBlock>
        <StaticsBlock
          title="1000 terabytes"
          paragraph="A capacidade de
            armazenamento de
            informação de um humano"
        ></StaticsBlock>
        <StaticsBlock
          title="500 trilhões"
          paragraph="O número de sinapses
            nervosas responsáveis pelo
            aprendizado em um adulto
            humano médio"
        ></StaticsBlock>
        <StaticsBlock
          title="420 milhões"
          paragraph="O número de adultos abaixo
            de 25 anos sem educação
            suficiente para encontrar
            empregos"
        ></StaticsBlock>
        <StaticsBlock
          title="26 anos de idade"
          paragraph="A idade com que Albert
            Einstein publicou o seu artigo
            inovador sobre a relatividade
            especial"
        ></StaticsBlock>
        <StaticsBlock
          title="1885"
          paragraph="Desenvolvimento da curva de
            esquecimento"
        ></StaticsBlock>
        <StaticsBlock
          title="1897"
          paragraph="Publicação da pesquisa de
            Ivan Pavlov sobre
            condicionamento clássico"
        ></StaticsBlock>
      </div>
    </div>
  );
}
