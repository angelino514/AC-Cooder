import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: para a animação só acontecer uma vez, podes descomentar a linha abaixo:
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Ativa quando 10% do item entra no ecrã
        rootMargin: "0px 0px -60px 0px" // Ativa um pouco antes do item aparecer por completo
      }
    );

    // Encontra todos os elementos que devem ser animados dentro deste contentor
    if (containerRef.current) {
      const elementos = containerRef.current.querySelectorAll('.animate-item');
      elementos.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return containerRef;
}