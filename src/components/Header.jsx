import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo(1).png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #2D2D2D;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

const Categories = styled.div`
  display: flex;
  gap: 1.5rem;
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
  &:hover {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  font-weight: 300;

  &:hover {
    opacity: 1;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Logo src={logo} alt="Monks" />
        <Categories>
          <CategoryLink href="#">Categoria 1</CategoryLink>
          <CategoryLink href="#">Categoria 2</CategoryLink>
          <CategoryLink href="#">Categoria 3</CategoryLink>
          <CategoryLink href="#">Categoria 4</CategoryLink>
        </Categories>
      </LogoSection>
      <Nav>
        <NavLink href="/formulario-manager">Formulário Manager</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 