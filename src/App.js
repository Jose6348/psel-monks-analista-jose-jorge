import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTags from './components/CategoryTags';
import ProductCards from './components/ProductCards';
import ImageGrid from './components/ImageGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
  }

  :root {
    --primary-color: #8a2be2;
    --text-color: #333;
    --background-dark: #1a1a1a;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <CategoryTags />
      <ProductCards />
      <ImageGrid />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;