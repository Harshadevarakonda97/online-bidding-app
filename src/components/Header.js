// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }
`;

const NavLinks = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      a {
        color: #343a40;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo" />
        <span>Genix Auctions</span>
      </Logo>
      <NavLinks>
        <ul>
          <li><a href="/">Auctions</a></li>
          <li><a href="/">Bidding</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">English</a></li>
          <li><a href="/">Login</a></li>
          <li><a href="/" className="btn btn-primary">Get Started</a></li>
        </ul>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
