import React from 'react';
import useScrollReveal from '../functions/useScrollReveal';

export default function Header() {
  // Ativa o gancho de animação automática para os itens do topo
  const headerRef = useScrollReveal();

  return (
    <header ref={headerRef} className="site-header">

      <div className="header-container">

        {/* Área do Logotipo (Aparece primeiro) */}
        <div className="logo-area animate-item" style={{ transitionDelay: '0s' }}>
          <a href="#" className="logo">
            AC<span>coder</span><span className="logo-brackets">()</span>
          </a>
        </div>

        {/* Menu de Navegação (Aparece ligeiramente depois) */}
        <nav className="nav-menu animate-item" style={{ transitionDelay: '0.15s' }}>
          <a href="#vantagens" className="nav-link">Vantagens</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#portfolio" className="nav-link">Portfólio</a>
        </nav>

        {/* Botão de Conversão (Aparece por último) */}
        <div className="header-cta animate-item" style={{ transitionDelay: '0.3s' }}>
          <a href="https://wa.me/244948376230" className="btn-cta">Pedir Orçamento</a>
        </div>

      </div>
    </header>
  );
}