import React from "react";

export default function NavHeader(){
    return(
        <div style={{
            fontSize: 20,
            display: 'flex',
            position: 'absolute',
            textAlign: "center",
            
        }}>            
            <h4 style={{
                
            }}
            >
                <a href="#">
                    Estatisticas
                </a>
            </h4>
            <h4>
                <a href="#">Tecnica Feynman</a>
            </h4>
            <h4>
                <a href="#">Tecnica Kaufman</a>
            </h4>
        </div>
    )
}