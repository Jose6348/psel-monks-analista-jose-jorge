import React from 'react';
import styled from 'styled-components';

const GridSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: left;
`;

const SectionDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    padding: 1rem;
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    padding: 0 1rem 1rem;
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const LargeImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ImageGrid = () => {
  // URLs temporárias para as imagens das cidades
  const cityImages = {
    city1: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80",
    city2: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=500&q=80",
    city3: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=500&q=80",
    city4: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&q=80"
  };

  return (
    <GridSection>
      <SectionTitle>Nossos Escritórios Globais</SectionTitle>
      <SectionDescription>Presença internacional com equipes locais especializadas em desenvolvimento de software</SectionDescription>
      
      <Grid>
        <GridItem>
          <img src={cityImages.city1} alt="Vista de montanhas e cidade" />
          <h3>Sede Principal</h3>
          <p>Centro tecnológico com vista para as montanhas</p>
        </GridItem>
        <GridItem>
          <img src={cityImages.city2} alt="Vista moderna da cidade" />
          <h3>Filial Corporativa</h3>
          <p>Hub de inovação no centro financeiro</p>
        </GridItem>
        <GridItem>
          <img src={cityImages.city3} alt="Prédio histórico com poste" />
          <h3>Escritório Europeu</h3>
          <p>Combinando tradição e modernidade</p>
        </GridItem>
        <GridItem>
          <img src={cityImages.city4} alt="Vista aérea urbana" />
          <h3>Centro de Operações</h3>
          <p>Conectando tecnologias globalmente</p>
        </GridItem>
      </Grid>

    </GridSection>
  );
};

export default ImageGrid; 