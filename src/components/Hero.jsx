import React from 'react';
import styled from 'styled-components';
import scroll from '../assets/images/Scroll.png';
import monksHero from '../assets/images/Monks_hero.png';

const HeroSection = styled.section`
  background-color: #2D2D2D;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  border-radius: 0 0 20px 20px;
  padding-left: 80px;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    height: 363px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
    padding: 0 1rem;
  }
`;

const Content = styled.div`
  max-width: 500px;
  color: white;
  text-align: left;
  width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    z-index: 2;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-family: 'HelveticaNeue';
  @media (max-width: 768px) {font-family: HelveticaNeue;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 2%;

  }
`;

const Description = styled.p`
  font-size: 24px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 7rem;
  font-family: 'HelveticaNeue';
  @media (max-width: 768px) {font-family: HelveticaNeue;
font-weight: 400;
font-size: 16px;
line-height: 100%;
letter-spacing: 2%;
}
`;

const ScrollContainer = styled.div`
  position: absolute;
  left: 30%;
  bottom: 2rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 3;

  @media (max-width: 768px) {
width: 38;
height: 51.42855453491211;
gap: 10px;
padding-right: 1px;
padding-left: 1px;
  }
`;

const ScrollText = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ScrollImage = styled.img`
  width: 80px;
  height: auto;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const HeroImage = styled.img`
  width: 50%;
  height: 100vh;
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%) ;

  @media (max-width: 768px) {
    position: absolute;
    right: -2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;

    height: 70vh;
    opacity: 0.9;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Content>
          <Title>Inovação que transforma negócios</Title>
          <Description>
            Nós
            conectamos
            os
            pontos
            para
            impulsionar
            a
            relevância
            cultural
            em
            todos
            os
            lugares
            onde
            as
            pessoas
            se
            conectam.          </Description>
        </Content>
        <HeroImage src={monksHero} alt="Monks" />
      </Container>
      <ScrollContainer>
        <ScrollText>Descubra mais</ScrollText>
        <ScrollImage src={scroll} alt="Scroll down" />
      </ScrollContainer>
    </HeroSection>
  );
};

export default Hero; 