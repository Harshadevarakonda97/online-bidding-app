// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.125rem;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    color: #6c757d;
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #007bff;
  }
`;

const ProductCard = ({ image, title, minBid, currentBid, timeLeft }) => (
  <Card>
    <Image src={image} alt={title} />
    <Content>
      <h4>{title}</h4>
      <p>Minimum Bid: ${minBid}</p>
      <p className="price">Current Bid: ${currentBid}</p>
      <p>Ends in: {timeLeft}</p>
    </Content>
  </Card>
);

export default ProductCard;
