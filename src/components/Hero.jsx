import React from 'react';
import styled from 'styled-components';
import scroll from '../assets/images/Scroll.png';

const HeroSection = styled.section`
  background-color: #1A1A1A;
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
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  max-width: 650px;
  color: white;
  margin-left: 4rem;
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

const MonksPattern = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 45%;
  height: 100%;
  background-image: url('/monks-pattern.png');
  background-size: contain;
  background-repeat: repeat-y;
  opacity: 0.8;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Content>
          <Title>Inovação digital que transforma negócios</Title>
          <Description>
            Somos especialistas em desenvolvimento de soluções tecnológicas que impulsionam o crescimento da sua empresa. Com expertise em tecnologias modernas e foco em resultados, transformamos ideias em realidade digital.
          </Description>
        </Content>
      </Container>
      <ScrollContainer>
        <ScrollText>Descubra mais</ScrollText>
        <ScrollImage src={scroll} alt="Scroll down" />
      </ScrollContainer>
      <MonksPattern />
    </HeroSection>
  );
};

export default Hero; 