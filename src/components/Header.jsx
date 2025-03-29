import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo(1).png';
import backIcon from '../assets/images/Back.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #2D2D2D;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogoSection = styled.div`
  display: flex;
  align-items: left;
  gap: 2rem;
  width: 100%;
  max-width: 2160px;
  margin: 0 auto;
  padding-left: 80px;
`;

const Logo = styled.img`
  height: 18px;
  width: auto;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 14px;
  position: relative;
  display: none;
  font-family: 'HelveticaNeue';

  @media (max-width: 768px) {
    display: block;
  }

  &:before,
  &:after,
  span {
    content: '';
    display: block;
    width: 20px;
    height: 1.5px;
    background: #fff;
    position: absolute;
    left: 0;
  }

  &:before {
    top: 0;
  }

  span {
    top: 50%;
    transform: translateY(-50%);
  }

  &:after {
    bottom: 0;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 2rem;
  font-family: 'HelveticaNeue';

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryLink = styled.a`
  color: #EAE8E4;
  text-decoration: none;
  font-size: 20px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  font-weight: 400;
  line-height: 100%;
  gap: 8px;
  font-family: 'HelveticaNeue';
  padding: 0 0.5rem;
  
  &:hover {
    opacity: 1;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #E6D5F7;
    flex-direction: column;
    padding: 1rem;
    z-index: 99;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: #2D2D2D;
  margin: -1rem -1rem 2rem -1rem;
`;

const MobileCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const MobileCategoryLink = styled.a`
  color: #2D2D2D;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:before {
    content: '•';
    font-size: 24px;
  }
`;

const BackButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem 10rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #2D2D2D;
  cursor: pointer;
  padding: 0;
  position: relative;
  margin-top: 1rem;
`;

const BackImage = styled.div`
  position: relative;
  width: 58px;
  height: 83px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  span {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    white-space: nowrap;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <LogoSection>
          <Logo src={logo} alt="Monks" />
          <MenuButton onClick={toggleMenu}>
            <span></span>
          </MenuButton>
          <Categories>
            <CategoryLink href="https://www.monks.com/pt/o-que-fazemos" target="_blank">O que fazemos</CategoryLink>
            <CategoryLink href="https://www.monks.com/pt/cases" target="_blank">Cases de sucesso</CategoryLink>
            <CategoryLink href="https://www.monks.com/pt/carreiras" target="_blank">Carreiras</CategoryLink>
            <CategoryLink href="https://www.monks.com/pt/blog" target="_blank">Blog</CategoryLink>
          </Categories>
        </LogoSection>
      </HeaderContainer>

      <MobileMenu isOpen={isMenuOpen}>
        <MobileHeader>
          <Logo src={logo} alt="Monks" />
          <MenuButton onClick={toggleMenu}>
            <span></span>
          </MenuButton>
        </MobileHeader>
        <MobileCategories>
          <MobileCategoryLink href="https://www.monks.com/pt/o-que-fazemos">O que fazemos</MobileCategoryLink>
          <MobileCategoryLink href="https://www.monks.com/pt/cases">Cases de sucesso</MobileCategoryLink>
          <MobileCategoryLink href="https://www.monks.com/pt/carreiras">Carreiras</MobileCategoryLink>
          <MobileCategoryLink href="https://www.monks.com/pt/blog">Blog</MobileCategoryLink>
        </MobileCategories>
        <BackButtonContainer>
          <BackButton onClick={toggleMenu}>
            <BackImage>
              <img src={backIcon} alt="Voltar" />
              <span>back</span>
            </BackImage>
          </BackButton>
        </BackButtonContainer>
      </MobileMenu>
    </>
  );
};

export default Header; 