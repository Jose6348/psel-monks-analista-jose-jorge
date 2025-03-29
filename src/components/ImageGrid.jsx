import React from 'react';
import styled from 'styled-components';
import city1 from '../assets/images/city1.png';
import city2 from '../assets/images/city2.png';
import city3 from '../assets/images/city3.png';
import city4 from '../assets/images/city4.png';

const GridSection = styled.section`
  padding: 4rem 2rem;
  background-color: #eae8e4;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  color: #2D2D2D;
  margin-bottom: 1rem;
  text-align: left;
`;

const SectionDescription = styled.p`
  font-family: HelveticaNeue;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 2%;
  margin-bottom: 40px;
  color: #2D2D2D;

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
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ImageGrid = () => {
  // URLs temporárias para as imagens das cidades
  const cityImages = {
    city1: city1,
    city2: city2,
    city3: city3,
    city4: city4
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