import React, { useState, useRef } from 'react';
import useScrollReveal from '../../functions/useScrollReveal';
import test from '../public/test.png'
import clinica from '../public/clinica.png'
import hotel from '../public/hotel.png'


export default function PortfolioSection() {

   let id = 0

   const projetos = [
      {
         id: id++,
         categoria: "Aura Perfumes",
         titulo: "AURA PERFOMES",
         imagemUrl: test,
         tecnologias: ["HTML", "CSS", "JavaScript"],
         descricao: "Projeto de loja virtual de perfumes desenvolvido com design moderno e responsivo, focado em experiência do utilizador e apresentação elegante de produtos.",
         linkLive: "https://angelino514.github.io/AuraPerfumes/",
      },
      {
         id: id++,
         categoria: "Clínica Odontólogica",
         titulo: "Clínica Odontológica",
         imagemUrl: clinica,
         tecnologias: ["React", "Tailwind", "Vite"],
         descricao: "Website moderno e responsivo desenvolvido para uma clínica odontológica, com foco em profissionalismo, credibilidade e experiência do utilizador.",
         linkLive: "https://angelino514.github.io/clinicaSorrisoReal/",
      }
      ,
      {
         id: id++,
         categoria: "Hotel Booking",
         titulo: "Hotel Booking",
         imagemUrl: hotel,
         tecnologias: ["Html", "css", "JavaScript"],
         descricao: "Website moderno e responsivo desenvolvido para um hotel, com apresentação de acomodações, serviços e simulação de reservas, proporcionando uma experiência intuitiva e profissional aos utilizadores.",
         linkLive: "https://angelino514.github.io/HotelSite/"
      }
   ];

   const categorias = []
   for (let i = 0; i < projetos.length; i++) {
      if (!categorias.some(obj => obj == projetos[i].categoria)) {
         categorias.push(projetos[i].categoria)
      }
   }


   const [filtro, setFiltro] = useState('todos');
   const scrollContainerRef = useRef(null);

   const testy = filtro === 'todos' ? projetos : projetos.filter(p => p.categoria === filtro)
   


   // Ativa o gancho de animação automática para a secção do portfólio
   const portfolioSectionRef = useScrollReveal();

   const lidarComScroll = (direcao) => {
      if (scrollContainerRef.current) {
         const { scrollLeft, clientWidth } = scrollContainerRef.current;
         const quantidadeMover = clientWidth * 0.75;

         scrollContainerRef.current.scrollTo({
            left: direcao === 'esquerda' ? scrollLeft - quantidadeMover : scrollLeft + quantidadeMover,
            behavior: 'smooth'
         });
      }
   };

   return (
      <section ref={portfolioSectionRef} className="portfolio-section" id="portfolio">
         <div className="section-container">

            {/* Cabeçalho */}
            <div className="portfolio-top-wrapper">
               <div className="section-header animate-item" style={{ transitionDelay: '0s' }}>
                  <span className="section-tag">// projetos_recentes</span>
                  <h2 className="section-title">Trabalhos em <span>Destaque</span></h2>
               </div>

               {/* Botões de Navegação (Setas) */}
               <div className="portfolio-nav-buttons animate-item" style={{ transitionDelay: '0.1s' }}>
                  <button onClick={() => lidarComScroll('esquerda')} className="nav-scroll-btn" aria-label="Voltar">
                     &lt;
                  </button>
                  <button onClick={() => lidarComScroll('direita')} className="nav-scroll-btn" aria-label="Avançar">
                     &gt;
                  </button>
               </div>
            </div>

            {/* Área de Scroll Horizontal dos Projetos */}
            <div className="portfolio-scroll-wrapper" ref={scrollContainerRef}>
               <div className="portfolio-grid-horizontal">
                  {testy.map((projeto, index) => (
                     <div
                        key={projeto.id}
                        className="portfolio-card animate-item"
                        style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                     /* O delay base começa em 0.2s e soma 0.1s para cada card, 
                        garantindo a subida fluida em cascata dos projetos na linha */
                     >

                        <div className="portfolio-thumb">
                           <div className="thumb-browser-bar">
                              <span className="dot"></span>
                              <span className="dot"></span>
                              <span className="dot"></span>
                           </div>
                           <div className="thumb-image-wrapper">
                              <img
                                 src={projeto.imagemUrl}
                                 alt={projeto.titulo}
                                 className="portfolio-img"
                                 loading="lazy"
                              />
                           </div>
                        </div>

                        <div className="portfolio-info">
                           <div className="portfolio-tags">
                              {projeto.tecnologias.map((tech, idx) => (
                                 <span key={idx} className="tech-tag">{tech}</span>
                              ))}
                           </div>

                           <h3 className="portfolio-project-title">{projeto.titulo}</h3>
                           <p className="portfolio-project-text">{projeto.descricao}</p>

                           <div className="portfolio-links">
                              <a href={projeto.linkLive} className="project-link primary">
                                 Ver Site <span>&rarr;</span>
                              </a>
                           </div>
                        </div>

                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>
   );
}