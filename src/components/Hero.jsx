import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: #cccccc;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #7a1dd2;
  }
`;

const DecorativePattern = styled.div`
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%) rotate(15deg);
  width: 600px;
  height: 600px;
  opacity: 0.2;
  z-index: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const MonksPattern = () => (
  <svg width="100%" height="100%" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="monksPattern" x="0" y="0" width="100" height="30" patternUnits="userSpaceOnUse">
        <text x="0" y="20" fill="#8a2be2" fontFamily="Arial" fontSize="20">.monks</text>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#monksPattern)" />
  </svg>
);

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo viverra.</p>
        <Button>Saiba +</Button>
      </HeroContent>
      <DecorativePattern>
        <MonksPattern />
      </DecorativePattern>
    </HeroContainer>
  );
};

export default Hero; 