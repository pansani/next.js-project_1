import React from "react";
import Image from "next/image";
import logoHeader from "./../public/assets/logo_place_header.png";
import NavHeader from "./NavBar";
import headerImage from "./../public/assets/header-image.png";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        minHeight: "600px",
        maxHeight: "756px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <NavHeader></NavHeader>
      <Image
        src={logoHeader}
        alt="Logo Practicum"
        width={200}
        height={50}
        style={{
          position: "absolute",
          left: "64px",
          top: "30px",
        }}
      />
      <h1
        style={{
          width: "730px",
          lineHeight: "96px",
          fontSize: "102px",
          fontWeight: "bold",
          marginLeft: "64px",
          alignSelf: "center",
        }}
      >
        Aprendendo a Aprender
      </h1>
      <p
        style={{
          lineHeight: "25px",
          fontSize: "18px",
          fontWeight: "normal",
          position: "absolute",
          bottom: "30px",
          left: "64px",
          width: "388px",
        }}
      >
        As técnicas de aprendizado mais eficazes que você pode aplicar ao seu
        cotidiano
        <a
          style={{
            textDecoration: "none",
            color: "#2F80ED",
            display: "block",
          }}
        >
          Saiba Mais➝
        </a>
      </p>
      <Image
        src={headerImage}
        alt="Homem refletindo ao topo de uma montanha"
        width={756}
        height={608}
        style={{
          position: "absolute",
          right: "0px",
          top: "10px",
          bottom: "0px",
          zIndex: "1",
        }}
      ></Image>
      <div
        style={{
          width: "568px",
          height: "568px",
          backgroundColor: "#2F80ED",
          position: "absolute",
          right: "0",
          top: "64px",
        }}
      ></div>
    </div>
  );
}
