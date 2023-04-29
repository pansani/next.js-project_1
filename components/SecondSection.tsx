import React from "react";

export default function SecondSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          minWidth: "784px",
          marginTop: "100px",
          marginBottom: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            width: '175px',
            color: "#2F80ED",
            lineHeight: "1.2",
            fontSize: "18px",
            fontWeight: "normal",
          }}
        >
          O maior problema da eduacacao
        </h3>

        <div style={{
          width: '80%',
          minWidth: '784px',
          display:'flex',
          flexDirection: "column",
          gap: '30px'
        }}>
          <p
            style={{
              lineHeight: "34px",
              fontSize: "24px",
              fontWeight: "normal",
            }}
          >
            Seja na escola ou na universidade, o assunto que ninguém vai te
            ensinar é como se tornar autodidata. Nós repetimos exercícios
            específicos e memorizamos informações sem pensar e quando chega a
            hora do exame, o objetivo é apenas passar. Mas depois que o exame
            acaba, essa informação não tem mais utilidade, e não há garantia que
            ela será retida. No fim, nós só estamos aprendendo mesmo a passar
            nas nossas provas.
          </p>
          <p
            style={{
              lineHeight: "34px",
              fontSize: "24px",
              fontWeight: "normal",
            }}
          >
            <span
              style={{
                lineHeight: "34px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Aqui vai a pergunta de fato:
            </span>{" "}
            será que essa abordagem de repetição e memorização nos ajuda
            realmente a entender o assunto? O consenso na academia atualmente é
            de que não ajuda. Aliás, mais importante do que um tópico individual
            é saber como estudar, mas por algum motivo esta questão é sempre
            deixada de lado. Então, o que podemos fazer para remediar
          </p>
          <p
            style={{
              lineHeight: "34px",
              fontSize: "24px",
              fontWeight: "normal",
            }}
          >
            Bem, há várias técnicas e exercícios que podem ser aplicados ao
            processo educacional para ajudar a torná-lo mais eficiente e
            cativante. Continue lendo para descobrir alguns dos segredos do
            aprendizado eficaz.
          </p>
        </div>
      </div>
    </div>
  );
}
