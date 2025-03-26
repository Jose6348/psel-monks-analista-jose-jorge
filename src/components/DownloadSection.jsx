import React from 'react';
import styled from 'styled-components';
import appStore from '../assets/images/ApleStore.png';
import playStore from '../assets/images/PlayStore.png';

const Section = styled.section`
  background-color: #3C0C60;
  padding: 4rem 2rem;
  margin: 2rem 1rem;
  width: calc(100% - 2rem);
  border-radius: 12px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StoreButton = styled.a`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 60px;
    width: auto;
  }
`;

const DownloadSection = () => {
  return (
    <Section>
      <Container>
        <TextContent>
          <Title>Baixe nosso aplicativo</Title>
          <Description>
            Tenha acesso a todos os nossos serviços na palma da sua mão. 
            Disponível para iOS e Android.
          </Description>
        </TextContent>
        <ButtonsContainer>
          <StoreButton href="#" target="_blank">
            <img src={appStore} alt="Download na App Store" />
          </StoreButton>
          <StoreButton href="#" target="_blank">
            <img src={playStore} alt="Download no Google Play" />
          </StoreButton>
        </ButtonsContainer>
      </Container>
    </Section>
  );
};

export default DownloadSection; 