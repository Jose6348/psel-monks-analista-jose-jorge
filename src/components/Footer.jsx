import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '../assets/Icons/Instagram.png';
import WhatsAppIcon from '../assets/Icons/WhatsApp.png';
import TwitterIcon from '../assets/Icons/Twitter.png';
import FacebookIcon from '../assets/Icons/Facebook.png';

const FooterContainer = styled.footer`
  background-color: #1C1C1C;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 24px;
      height: 24px;
      filter: brightness(0) invert(1);
    }
  }
`;

const MainText = styled.div`
  color: white;
  font-size: 1.2rem;
  margin: 1.5rem 0;
  font-weight: 500;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  color: #9e9e9e;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://www.instagram.com/madebymonks/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={InstagramIcon} alt="Instagram" style={{ width: '32px', height: '32px' }} />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src={WhatsAppIcon} alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
        </a>
        <a href="https://x.com/madebymonks_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src={TwitterIcon} alt="Twitter" style={{ width: '32px', height: '32px' }} />
        </a>
        <a href="https://www.facebook.com/share/1NBgt8BdnM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src={FacebookIcon} alt="Facebook" style={{ width: '32px', height: '32px' }} />
        </a>
      </SocialLinks>
      <MainText>
        Conheça um pouco mais sobre nós
      </MainText>
      <FooterLinksContainer>
        <FooterLink href="https://www.monks.com/pt/declaracao-de-acessibilidade" target="_blank" rel="Acessibilidade">
          Declaração de acessibilidade
        </FooterLink>
        <FooterLink href="https://www.monks.com/pt/aviso-de-privacidade" target="_blank" rel="Privacidade">
          Política de privacidade
        </FooterLink>
        <FooterLink href="https://www.monks.com/pt/esg" target="_blank" rel="Sustentabilidade">
          Sustentabilidade
        </FooterLink>
        <FooterLink href="https://www.monks.com/pt/seguranca-da-informacao-e-conformidade" target="_blank" rel="info">
          Segurança da informação
        </FooterLink>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer; 