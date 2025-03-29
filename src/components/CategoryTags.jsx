import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 80px auto;
  background-color: #eae8e4;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 500;
  margin-left: 80px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 32px 24px 24px 32px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
    width: 187;
  height: 46;
  gap: 10px;
  padding-top: 8px;
  padding-right: 40px;
  padding-bottom: 8px;
  padding-left: 40px;
  border-radius: 32px;
  border-width: 1px;

    margin: 32px 24px 24px 32px;

`;

const Tag = styled.button`
  background-color: #DFDCD5;
  color: #7D26C9;
  border: 1px solid #7D26C9;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-align: center;

  &:hover {
    background-color: #7D26C9;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 1.2rem;
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
    'Infantil',
    'Shampoo',
    'Sabonete',
    'Body splash',
    'Óleo corporal',
    'Corretivo',
    'Proteção solar'
  ];

  return (
    <Section>
      <Title>Temos soluções para todos os gostos</Title>
      <TagsContainer>
        {categories.map((category, index) => (
          <Tag key={index}>{category}</Tag>
        ))}
      </TagsContainer>
    </Section>
  );
};

export default CategoryTags; 