import React from 'react';
import styled from 'styled-components';

const TagsContainer = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Tag = styled.a`
  background-color: ${props => props.highlighted ? '#8a2be2' : '#fff'};
  color: ${props => props.highlighted ? '#fff' : '#333'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #8a2be2;
    color: white;
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const CategoryTags = () => {
  return (
    <TagsContainer>
      <Title>Lorem ipsum dolor sit amet consectetur</Title>
      <TagsWrapper>
        <TagGroup>
          <Tag href="#perfumaria" highlighted>Perfumaria</Tag>
          <Tag href="#corpo">Corpo e banho</Tag>
          <Tag href="#hidratante">Hidratante</Tag>
          <Tag href="#desodorante">Desodorante</Tag>
          <Tag href="#cabelos">Cabelos</Tag>
        </TagGroup>
        <TagGroup>
          <Tag href="#maquiagem">Maquiagem</Tag>
          <Tag href="#rosto">Rosto</Tag>
          <Tag href="#casa">Casa</Tag>
          <Tag href="#infantil">Infantil</Tag>
          <Tag href="#shampoo">Shampoo</Tag>
          <Tag href="#sabonete">Sabonete</Tag>
        </TagGroup>
        <TagGroup>
          <Tag href="#body-splash">Body splash</Tag>
          <Tag href="#oleo-corporal">Óleo corporal</Tag>
          <Tag href="#corretivo">Corretivo</Tag>
          <Tag href="#protecao-solar">Proteção solar</Tag>
        </TagGroup>
      </TagsWrapper>
    </TagsContainer>
  );
};

export default CategoryTags; 