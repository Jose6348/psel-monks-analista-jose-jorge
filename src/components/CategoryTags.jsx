import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 3rem;
  font-weight: 500;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 3rem;
  border: 1px dashed rgba(125, 38, 201, 0.3);
  border-radius: 12px;
`;

const TagRow = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Tag = styled.button`
  background-color: rgba(125, 38, 201, 0.1);
  color: #7D26C9;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-align: center;

  &:hover {
    background-color: #7D26C9;
    color: white;
  }
`;

const CategoryTags = () => {
  const categoryRows = [
    ['Perfumaria', 'Corpo e banho', 'Hidratante', 'Desodorante', 'Cabelos'],
    ['Maquiagem', 'Rosto', 'Casa', 'Infantil', 'Shampoo', 'Sabonete'],
    ['Body splash', 'Óleo corporal', 'Corretivo', 'Proteção solar']
  ];

  return (
    <Section>
      <Title>Temos soluções para todos os gostos</Title>
      <TagsContainer>
        {categoryRows.map((row, rowIndex) => (
          <TagRow key={rowIndex}>
            {row.map((category, index) => (
              <Tag key={index}>{category}</Tag>
            ))}
          </TagRow>
        ))}
      </TagsContainer>
    </Section>
  );
};

export default CategoryTags; 