import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  .monks {
    color: #8a2be2;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  li a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #8a2be2;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <span className="monks">Monks</span> Technology
      </Logo>
      <Nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#cases">Cases</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 