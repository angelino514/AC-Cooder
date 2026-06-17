import React from 'react';
import useScrollReveal from '../functions/useScrollReveal';

export default function FooterComponent() {
  const anoAtual = new Date().getFullYear();
  
  // Ativa o gancho de animação automática para o rodapé
  const footerRef = useScrollReveal();

  return (
    <footer ref={footerRef} className="site-footer">
      <div className="footer-container">
        
        {/* Bloco Superior do Footer */}
        <div className="footer-top">
          
          {/* Coluna 1: Marca e Slogan */}
          <div className="footer-brand animate-item" style={{ transitionDelay: '0s' }}>
            <a href="#" className="logo" aria-label="AC coder Home">
              <span className="logo-brackets">&lt;</span>AC<span>coder</span><span className="logo-brackets">/&gt;</span>
            </a>
            <p className="footer-slogan">
              Transformando linhas de código em soluções digitais de alto impacto. Especialista na criação de websites modernos e otimizados.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="footer-nav animate-item" style={{ transitionDelay: '0.15s' }}>
            <h4 className="footer-title">// navegação</h4>
            <ul className="footer-links-list">
              <li><a href="#vantagens" className="footer-link">Vantagens</a></li>
              <li><a href="#servicos" className="footer-link">Serviços</a></li>
              <li><a href="#portfolio" className="footer-link">Portfólio</a></li>
              <li><a href="#contacto" className="footer-link">Contacto</a></li>
            </ul>
          </div>

          {/* Coluna 3: Status do Sistema (Estilo Terminal) */}
          <div className="footer-status animate-item" style={{ transitionDelay: '0.3s' }}>
            <h4 className="footer-title">// system_status</h4>
            <div className="status-terminal">
              <p><span className="terminal-prompt">&gt;</span> location: "Huambo, AO"</p>
              <p><span className="terminal-prompt">&gt;</span> status: "Disponível para Projetos"</p>
              <p><span className="terminal-prompt">&gt;</span> stack: "React // Node.js // CSS"</p>
            </div>
          </div>

        </div>

        {/* Linha de Divisão (Surgimento suave junto com a base) */}
        <hr className="footer-divider animate-item" style={{ transitionDelay: '0.45s' }} />

        {/* Bloco Inferior: Copyright */}
        <div className="footer-bottom animate-item" style={{ transitionDelay: '0.5s' }}>
          <p className="copyright-text text-bottom">
            &copy; {anoAtual} <span className="highlight">AC cooder</span>. Todos os direitos reservados.
          </p>
          <p className="footer-built-with">
            Built with <span>&lt;React /&gt;</span> &amp; Premium CSS
          </p>
        </div>

      </div>
    </footer>
  );
}