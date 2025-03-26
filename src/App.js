import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTags from './components/CategoryTags';
import ProductCards from './components/ProductCards';
import ImageGrid from './components/ImageGrid';
import CityShowcase from './components/CityShowcase';
import DownloadSection from './components/DownloadSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #DFDCD5;
    min-height: 100vh;
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
      <ImageGrid />
      <CityShowcase />
      <DownloadSection />
      <CategoryTags />
      <ProductCards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;