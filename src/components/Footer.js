// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import facebookLogo from '../assets/facebooklogo.png';
import googleLogo from '../assets/googlelogo.png';
import instagramLogo from '../assets/Instagram_icon.png';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #fff;
  padding: 40px 0;
  text-align: center;

  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;

    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="social-links">
      <img src={facebookLogo} alt="Facebook" />
      <img src={googleLogo} alt="Google" />
      <img src={instagramLogo} alt="Instagram" />
    </div>
    <p>© 2024 Genix Auctions. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;
