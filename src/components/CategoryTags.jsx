import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #7D26C9;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;

const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  border: 1px dashed #7D26C9;
  border-radius: 8px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Tag = styled.button`
  background-color: #F0E6FA;
  color: #7D26C9;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #7D26C9;
    color: white;
  }
`;

const CategoryTags = () => {
  const categories = [
    'Perfumaria',
    'Corpo e banho',
    'Hidratante',
    'Desodorante',
    'Cabelos',
    'Maquiagem',
    'Rosto',
    'Casa',
    'Shampoo',
    'Sabonete',
    'Body splash',
    'Óleo corporal',
    'Corretivo',
    'Proteção solar'
  ];

  return (
    <Section>
      <Title>Lorem ipsum dolor sit amet consectetur</Title>
      <TagsContainer>
        {categories.map((category, index) => (
          <Tag key={index}>{category}</Tag>
        ))}
      </TagsContainer>
    </Section>
  );
};

export default CategoryTags; 