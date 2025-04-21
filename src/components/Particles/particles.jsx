import { useEffect } from 'react';
import './particles.css';

const Particles = () => {
  useEffect(() => {
    const container = document.querySelector('.app-container');
    const colors = ['var(--primary)', 'var(--secondary)', '#ffffff'];
    
    for(let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        --float-x: ${Math.random() * 100 - 50}px;
        --float-y: ${Math.random() * 100 - 50}px;
        width: ${Math.random() * 5 + 2}px;
        height: ${Math.random() * 5 + 2}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
      `;
      container.appendChild(particle);
    }
  }, []);

  return null;
};

export default Particles;