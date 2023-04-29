import React from "react";

export default function NavHeader() {
  return (
    <div
      style={{
        fontSize: 20,
        display: "flex",
        position: "absolute",
        top: "30px",
        left: "33%",
      }}
    >
      <h4
        style={{
          paddingRight: "20px",
          fontSize: '20px',
          fontWeight: 'normal'
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "underline",
          }}
        >
          Estatisticas
        </a>
      </h4>
      <h4
        style={{
          paddingRight: "20px",
          fontSize: '20px',
          fontWeight: '400',
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "underline",
          }}
        >
          Tecnica Feynman
        </a>
      </h4>
      <h4 style={{
        fontSize: '20px',
        fontWeight: ''
      }}>
        <a
          href="#"
          style={{
            textDecoration: "underline",
            fontSize: '20px',
          }}
        >
          Tecnica Kaufman
        </a>
      </h4>
    </div>
  );
}
