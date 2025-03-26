import React from 'react';
import styled from 'styled-components';
import city5 from '../assets/images/city5.png';
import city6 from '../assets/images/city6.png';
import city7 from '../assets/images/city7.png';

const ShowcaseSection = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 800px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainImage = styled.div`
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const SideImages = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;

  div {
    height: 240px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const CityShowcase = () => {
  return (
    <ShowcaseSection>
      <SectionTitle>Presença Global</SectionTitle>
      <SectionDescription>
        Nossa rede de escritórios estrategicamente localizados nos permite atender clientes em diferentes regiões, 
        mantendo a excelência e qualidade em todos os projetos.
      </SectionDescription>

      <GridContainer>
        <MainImage>
          <img src={city5} alt="Vista panorâmica de Nova York" />
        </MainImage>
        <SideImages>
          <div>
            <img src={city6} alt="Los Angeles ao pôr do sol" />
          </div>
          <div>
            <img src={city7} alt="Seattle Space Needle" />
          </div>
        </SideImages>
      </GridContainer>
    </ShowcaseSection>
  );
};

export default CityShowcase; 