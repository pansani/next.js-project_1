import React from "react";
import Copyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1F1F1F",
        minHeight: "350px",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        paddingTop: "60px",
        paddingBottom: "40px",
      }}
    >
      <div style={{
        width: '90%',
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Copyright></Copyright>
        
      </div>
    </footer>
  );
}
