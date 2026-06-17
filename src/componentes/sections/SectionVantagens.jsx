import React from 'react';
import { Globe, Shield, Zap, TrendingUp } from 'lucide-react'; // Ícones modernos
import useScrollReveal from '../../functions/useScrollReveal';

export default function VantagensSection() {
  // Ativa o gancho de animação automática para a secção de vantagens
  const advantagesSectionRef = useScrollReveal();

  const vantagens = [
    {
       id: 1,
       icone: <Globe size={24} />,
       titulo: "Presença Digital 24/7",
       descricao: "O teu negócio fica aberto para o mundo sem interrupções. Atrai novos clientes em Huambo, Angola ou qualquer parte do planeta a qualquer hora."
    },
    {
       id: 2,
       icone: <Shield size={24} />,
       titulo: "Credibilidade e Autoridade",
       descricao: "Empresas com site próprio transmitem muito mais confiança. Deixa de depender apenas das redes sociais e tem o controlo total da tua marca."
    },
    {
       id: 3,
       icone: <TrendingUp size={24} />,
       titulo: "Vendas e Captação Automática",
       descricao: "Transforma visitantes em clientes. Com formulários de contacto integrados e botões de ação diretos, o teu site trabalha como um comercial focado em conversão."
    },
    {
       id: 4,
       icone: <Zap size={24} />,
       titulo: "Velocidade e Desempenho",
       descricao: "Desenvolvimento com código limpo e otimizado para que os teus clientes tenham uma experiência rápida, fluida e profissional em qualquer dispositivo."
    }
  ];

  return (
    <section ref={advantagesSectionRef} className="advantages-section" id="vantagens">
       <div className="section-container">

          {/* Cabeçalho da Secção */}
          <div className="section-header animate-item" style={{ transitionDelay: '0s' }}>
             <span className="section-tag">Porquê ter um site?</span>
             <h2 className="section-title">
                O teu negócio merece uma estrutura <span>Profissional</span>
             </h2>
             <p className="section-subtitle">
                Não fiques invisível no mercado digital. Descobre como um website personalizado pode impulsionar os teus resultados.
             </p>
          </div>

          {/* Grelha de Vantagens */}
          <div className="advantages-grid">
             {vantagens.map((vantagem, index) => (
                <div 
                   key={vantagem.id} 
                   className="advantage-card animate-item"
                   style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                   /* Entrada progressiva de baixo para cima para cada uma das vantagens */
                >
                   <div className="card-icon">
                      {vantagem.icone}
                   </div>
                   <h3 className="card-title">{vantagem.titulo}</h3>
                   <p className="card-text">{vantagem.descricao}</p>
                </div>
             ))}
          </div>

       </div>
    </section>
  );
}