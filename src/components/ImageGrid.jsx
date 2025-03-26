import React from 'react';
import styled from 'styled-components';

const GridSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const GridItem = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
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
  return (
    <>
      <GridSection>
        <SectionTitle>Lorem ipsum dolor sit amet consectetur</SectionTitle>
        <SectionDescription>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</SectionDescription>
        
        <Grid>
          <GridItem>
            <img src="https://via.placeholder.com/300x200" alt="City view" />
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
          <GridItem>
            <img src="https://via.placeholder.com/300x200" alt="City view" />
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
          <GridItem>
            <img src="https://via.placeholder.com/300x200" alt="City view" />
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
          <GridItem>
            <img src="https://via.placeholder.com/300x200" alt="City view" />
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
        </Grid>

        <SectionTitle>Lorem ipsum dolor sit amet consectetur</SectionTitle>
        <SectionDescription>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</SectionDescription>
        
        <LargeImageGrid>
          <img src="https://via.placeholder.com/600x400" alt="Large city view" />
          <img src="https://via.placeholder.com/600x400" alt="Large city view" />
        </LargeImageGrid>
      </GridSection>
    </>
  );
};

export default ImageGrid; 