import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(125, 38, 201, 0.05);
  border: 1px solid rgba(125, 38, 201, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 1.25rem;
  margin: 0;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const Button = styled.button`
  background-color: #DFBBFE;
  color:rgb(0, 0, 0);
  border: 1px solid #7D26C9;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    background-color: #7D26C9;
    color: white;
  }
`;

const ProductCards = () => {
  const products = [
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.',
    },
  ];

  return (
    <Section>
      <CardsContainer>
        {products.map((product, index) => (
          <Card key={index}>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
            <Button>Lorem ipsum</Button>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default ProductCards; 