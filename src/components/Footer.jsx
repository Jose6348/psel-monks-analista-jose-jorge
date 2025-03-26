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
        <a href="#instagram" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#whatsapp" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#twitter" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#facebook" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
      </SocialLinks>
      <FooterText>Lorem ipsum dolor sit amet</FooterText>
      <FooterText>Lorem ipsum</FooterText>
      <FooterText>Lorem ipsum</FooterText>
    </FooterContainer>
  );
};

export default Footer; 