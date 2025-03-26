import React from 'react';
import styled from 'styled-components';

const ProductSection = styled.section`
  padding: 2rem;
  background-color: white;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #8a2be2;
    border-radius: 4px;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0 0;
    color: #666;
    font-size: 0.9rem;
  }
`;

const ProductCards = () => {
  return (
    <ProductSection>
      <ProductContainer>
        <ProductCard>
          <ProductImage>
            <img src="https://via.placeholder.com/280x200" alt="Product" />
          </ProductImage>
          <ProductInfo>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </ProductInfo>
        </ProductCard>

        <ProductCard>
          <ProductImage>
            <img src="https://via.placeholder.com/280x200" alt="Product" />
          </ProductImage>
          <ProductInfo>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </ProductInfo>
        </ProductCard>

        <ProductCard>
          <ProductImage>
            <img src="https://via.placeholder.com/280x200" alt="Product" />
          </ProductImage>
          <ProductInfo>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </ProductInfo>
        </ProductCard>
      </ProductContainer>
    </ProductSection>
  );
};

export default ProductCards; 