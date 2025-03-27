import React from 'react';
import styled from 'styled-components';
import scroll from '../assets/images/Scroll.png';
import monksHero from '../assets/images/Monks_hero.png';

const HeroSection = styled.section`
  background-color: #2D2D2D;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  border-radius: 0 0 20px 20px;
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
`;

const Content = styled.div`
  max-width: 650px;
  color: white;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 540px;
`;

const ScrollContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  width: 45%;
  height: 80vh;
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