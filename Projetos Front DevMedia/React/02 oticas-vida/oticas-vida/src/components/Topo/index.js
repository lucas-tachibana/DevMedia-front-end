import React from 'react';
import './style.css';

export default function Topo() {
    return (
        <header>
          <div className='limitar-secao'>
            <a href="#inicio" className='logo-topo'>
              <img src='assets/imagens/logo.png' alt='Logo' title='Logo' />
            </a>
            <nav>
              <a href="#produtos">Produtos</a>
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </header>
    )
}