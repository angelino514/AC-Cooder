import React from 'react';
import useScrollReveal from '../../functions/useScrollReveal';

export default function ServicosSection() {
  const servicos = [
    {
      id: "01.",
      tag: "Do Zero",
      titulo: "Websites Institucionais",
      descricao: "Desenvolvimento de sites corporativos modernos para empresas que querem transmitir autoridade, atrair leads qualificados e destacar-se da concorrência."
    },
    {
      id: "02.",
      tag: "Conversão",
      titulo: "Landing Pages de Alta Conversão",
      descricao: "Páginas focadas num único objetivo: vender um produto ou captar contactos. Design persuasivo e carregamento ultra-rápido para campanhas de anúncios."
    },
    {
      id: "03.",
      tag: "Vendas Online",
      titulo: "Lojas Virtuais (E-commerce)",
      descricao: "Criação de plataformas de vendas completas, seguras e fáceis de gerir. Perfeitas para escalar o teu negócio e aceitar pagamentos digitais."
    },
    {
      id: "04.",
      tag: "Otimização",
      titulo: "Manutenção e SEO",
      descricao: "Otimização de sites existentes para aparecerem no Google, correção de erros, melhoria de velocidade e atualizações de segurança constantes."
    }
  ];

  // Ativa o gancho de animação automática para a secção de serviços
  const servicesSectionRef = useScrollReveal();

  return (
    <section ref={servicesSectionRef} className="services-section" id="servicos">
      <div className="section-container">
        
        {/* Cabeçalho da Secção */}
        <div className="section-header animate-item" style={{ transitionDelay: '0s' }}>
          <span className="section-tag">[ os meus serviços ]</span>
          <h2 className="section-title">
            Soluções Digitais sob <span>Medida</span>
          </h2>
          <p className="section-subtitle">
            Do design ao código. Desenvolvo ferramentas digitais focadas em trazer resultados reais para o teu negócio.
          </p>
        </div>

        {/* Grelha de Serviços */}
        <div className="services-grid">
          {servicos.map((servico, index) => (
            <div 
              key={servico.id} 
              className="service-card animate-item"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              /* O cabeçalho entra primeiro e, a partir dos 0.2s, os cards 
                 entram consecutivamente com intervalos de 100ms */
            >
              <div className="service-card-top">
                <span className="service-number">{servico.id}</span>
                <span className="service-badge">{servico.tag}</span>
              </div>
              <h3 className="service-title">{servico.titulo}</h3>
              <p className="service-text">{servico.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}