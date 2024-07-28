// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import backgroundImage from '../assets/backgroundLogo.png'; // Ensure correct image path
import sonyHeadphones from '../assets/sonyheadphones.png'; // Example product image

const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <h1>Your Gateway to Extraordinary Finds</h1>
        <p>Unlock deals, bid smart, and seize the moment with our online bidding bonanza!</p>
        <button className="btn">Watch Video</button>
      </HeroSection>
      <ProductGrid>
        <ProductCard
          image={sonyHeadphones}
          title="Sony Black Headphones"
          minBid="100"
          currentBid="157"
          timeLeft="1 day 12 hrs 43 minutes"
        />
        {/* Add more ProductCard components as needed */}
      </ProductGrid>
    </>
  );
};

export default Home;
