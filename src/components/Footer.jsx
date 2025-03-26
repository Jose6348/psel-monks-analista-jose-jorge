import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--background-dark);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const FooterText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://www.linkedin.com/company/monks-technology" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/monks-tech" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/monkstech" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/monkstech" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </SocialLinks>
      <FooterText>© 2024 Monks Technology. Todos os direitos reservados.</FooterText>
      <FooterText>Transformando ideias em soluções digitais desde 2014</FooterText>
      <FooterText>contato@monkstechnology.com.br | +55 (11) 9999-9999</FooterText>
    </FooterContainer>
  );
};

export default Footer; 