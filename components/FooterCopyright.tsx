import React from "react";
import Image from "next/image";
import footerLogo from "./../public/assets/logo_place_footer.png";


export default function Copyright() {
  return (
    <div
      style={{
        minWidth: "711px",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
        <Image
            src={footerLogo}
            alt="Footer Logo"
            style={{
              width: "130px",
              height: "25px",
            }}
          ></Image>
          <h3
            style={{
              color: "#FFF",
              position: 'absolute',
              bottom: '20px'
            }}
          >
            © 2023 Joao Claudio Pansani
          </h3>
    </div>
  );
}
