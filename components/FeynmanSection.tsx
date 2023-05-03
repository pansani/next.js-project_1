import React from "react";

export default function Feynman() {
  return (
    <div
      style={{
        position: "relative",
        height: "790px",
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url(/assets/feynman.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "867px 637px",
        marginBottom: "5px",
        backgroundColor: "#F2F2F2",
      }}
    >
      <h1
        style={{
          width: "775px",
          lineHeight: 1.15,
          fontSize: "130px",
          fontWeight: "bold",
          textAlign: "center",
          position: "absolute",
          zIndex: 1,
        }}
      >
        A tecnica de Feynman
      </h1>
      <h2
        style={{
          lineHeight: "51px",
          fontSize: "40px",
          fontWeight: "normal",
          textAlign: "center",
          position: "absolute",
          zIndex: 1,
          top: "45%",
        }}
      >
        Aprender sem esquecer
      </h2>
      <h2 style={{
        fontSize: '30px',
        position: 'absolute',
        right: '20px',
        display: "flex",
        top: '300px',
        color: '#2F80ED'
      }}>Mais→</h2>
    </div>
  );
}
