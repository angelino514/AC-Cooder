import React, { useState } from 'react';
import useScrollReveal from '../../functions/useScrollReveal';

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    projeto: 'institucional',
    mensagem: ''
  });

  // Estado para guardar mensagens de erro de validação
  const [erro, setErro] = useState('');

  // Ativa o gancho de animação automática para a secção de contacto
  const contactSectionRef = useScrollReveal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpa o erro assim que o utilizador volta a digitar
    if (erro) setErro('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação manual robusta
    if (!formData.nome.trim()) {
      setErro('Por favor, diz-me o teu nome.');
      return;
    }

    if (!formData.email.trim()) {
      setErro('Preciso do teu e-mail para te responder.');
      return;
    }

    if (!formData.mensagem.trim()) {
      setErro('Por favor, escreve uma breve mensagem a descrever o teu projeto.');
      return;
    }

    // Se passou na validação, limpa qualquer erro anterior
    setErro('');

    // Estruturação do e-mail
    const assunto = encodeURIComponent(`Orçamento de Website - ${formData.nome}`);
    const corpoEmail = encodeURIComponent(
      `Olá AC coder,\n\n` +
      `Meu nome é ${formData.nome}.\n` +
      `Estou interessado num website do tipo: ${formData.projeto}.\n\n` +
      `Detalhes do projeto:\n${formData.mensagem}\n\n` +
      `Aguardando resposta no e-mail: ${formData.email}`
    );

    // Abre o e-mail do utilizador
    window.location.href = `mailto:angelinoeurico574@gmail.com?subject=${assunto}&body=${corpoEmail}`;
  };

  return (
    <section ref={contactSectionRef} className="contact-section" id="contacto">
      <div className="section-container contact-grid">
        
        {/* Lado Esquerdo: Texto Informativo */}
        <div className="contact-info animate-item" style={{ transitionDelay: '0s' }}>
          <span className="section-tag">// iniciar_projeto</span>
          <h2 className="section-title">
            Vamos tirar a tua ideia do <span>Código</span>
          </h2>
          <p className="contact-description">
            Estás pronto para levar o teu negócio para o próximo nível? Envia os detalhes por e-mail e eu respondo com uma proposta personalizada em menos de 24 horas.
          </p>
          
          <div className="contact-meta">
            <div className="meta-item">
              <span className="meta-label">E-mail Direto:</span>
              <span className="meta-value">angelinoeurico574@gmail.com</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Localização:</span>
              <span className="meta-value">Huambo, Angola</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="contact-form-container animate-item" style={{ transitionDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            
            {/* Mensagem de Erro Dinâmica */}
            {erro && (
              <div className="form-error-msg">
                <span>[erro]</span> {erro}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="nome">Como te chamas?</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Ex: Silvestre Catumbela"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">O teu melhor e-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="nome@empresa.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="projeto">Que tipo de site precisas?</label>
              <select 
                id="projeto" 
                name="projeto"
                value={formData.projeto}
                onChange={handleChange}
                className='opcoes-projectos'
              >
                <option value="institucional">Website Institucional</option>
                <option value="landing-page">Landing Page de Vendas</option>
                <option value="ecommerce">Loja Virtual (E-commerce)</option>
                <option value="manutencao">Manutenção ou Otimização SEO</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Fala-me um pouco sobre o projeto</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="4" 
                placeholder="Descreve brevemente o teu negócio e o que esperas com o novo site..."
                value={formData.mensagem}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar Proposta <span>&rarr;</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}