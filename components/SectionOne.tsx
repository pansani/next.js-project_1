import React from 'react';
import Image from 'next/image';
import logoHeader from './../public/assets/logo_place_header.png'
import NavHeader from './NavBar';

export default function Header() {
  return (
    <div style={{
      backgroundColor: '#F2F2F2',
      minHeight: '600px',
      maxHeight: '756px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    }}>
      <NavHeader></NavHeader>
      <Image 
      src={logoHeader}
      alt="Logo Practicum" 
      width={200}
      height={50}
      style={{
        position: 'absolute',
        left: '64px',
        top: '30px',
      }}
      />
      <h1 style={{
        width: '730px',
        lineHeight: '96px',
        fontSize: '102px',
        fontWeight: 'bold',
        marginLeft: '64px',
        alignSelf: 'center'
        
      }}> 
        Aprendendo a Aprender
      </h1>
      <p style={{
        lineHeight: '25',
        fontSize: '18',
        fontWeight: 'normal'
      }}>
      As técnicas de aprendizado mais eficazes que
      você pode aplicar ao seu cotidiano
      </p>
    </div>
  );
}