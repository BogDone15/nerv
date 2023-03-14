import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 3rem;
`;

const Left = styled.div`
  width: 25%;
  height: 6.6rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem 0 1.2rem;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  & > a {
    display: block;
    max-width: 28rem;
    width: 100%;
  }
`;

const Image = styled.img``;

const Right = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  height: 6.6rem;
  padding: 0 2.2rem 0 4.6rem;
  border-top-right-radius: 3rem;
  background: ${(props) => props.theme.colorMain};
`;

const RightNav = styled.div`
display: flex;
align-items: center;
  & > a {
    position: relative;
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 2.2rem;
    color: ${(props) => props.theme.colorGray};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        #0b0b0d 5%,
        rgba(255, 255, 255, 0.8) 10%,
        rgba(255, 255, 255, 0.8) 95%,
        #0b0b0d
      );
      transform: translateX(-101%);
      backface-visibility: hidden;
      transform-origin: left;
      transition: all 0.2s ease;
    }

    &:hover {
      opacity: 0.7;
      &:before {
        transform: translateX(101%);
      }
    }
  }

  & > span {
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 2.2rem;
    color: ${(props) => props.theme.colorGray};
    text-transform: uppercase;
    margin: 0 1rem;
  }
`;

const RightLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3.5rem;
  & > a {
    position: relative;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontmd};
    line-height: 2.2rem;
    color: ${(props) => props.theme.colorGray};
    text-transform: uppercase;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        #0b0b0d 5%,
        rgba(255, 255, 255, 0.8) 10%,
        rgba(255, 255, 255, 0.8) 95%,
        #0b0b0d
      );
      transform: translateX(-101%);
      backface-visibility: hidden;
      transform-origin: left;
      transition: all 0.2s ease;
    }

    &:hover {
      opacity: 0.7;
      &:before {
        transform: translateX(101%);
      }
    }
  }
`;

export const Nav = ({ children }) => {
  return (
    <Wrapper>
      <Left>
        <Link to="/">
          <Image src={logo} alt="MONACO" />
        </Link>
      </Left>
      <Right>
        <RightNav>{children}</RightNav>
        <RightLinks>
          <Link to="/character">Enter</Link>
          <Link to="/order">Cart</Link>
        </RightLinks>
      </Right>
    </Wrapper>
  );
};
