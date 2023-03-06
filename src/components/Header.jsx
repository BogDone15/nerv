import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorGray};
`;

const TopLeft = styled.div`
  width: 30%;
  padding-left: 0.2rem;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
  }
`;

const TopRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-right: 3rem;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
  }
`;

const Middle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;
  margin: 0.5rem 0;
  padding-right: 9.5rem;
`;

const Item = styled.li`
  & > a {
    display: block;
    position: relative;
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorMain};
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
      background: ${(props) => props.theme.colorMain};
      transform: translateX(-101%);
      backface-visibility: hidden;
      transform-origin: left;
      transition: all 0.2s ease;
    }
  }

  &:hover {
    & > a {
      opacity: 0.7;

      &:before {
        transform: translateX(101%);
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 30px;
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
  justify-content: flex-end;
  gap: 3.5rem;
  height: 6.6rem;
  padding-right: 2.2rem;
  /* padding: 2.2rem 2.2rem 2.2rem 0; */
  border-top-right-radius: 30px;
  background: ${(props) => props.theme.colorMain};
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

export const Header = () => {
  return (
    <>
      <Top>
        <TopLeft>
          <span>LOGO</span>
        </TopLeft>
        <TopRight>
          <span>MAIN INTERFACE</span>
          <span>ORDER</span>
        </TopRight>
      </Top>
      <Middle>
        <Item>
          <Link to="/">TERMS OF CONDITION</Link>
        </Item>
        <Item>
          <Link to="/">PRIVATE POLICY </Link>
        </Item>
        <Item>
          <Link to="/">SHIPPING</Link>
        </Item>
        <Item>
          <Link to="/">RETURN</Link>
        </Item>
        <Item>
          <Link to="/">CORPORATION</Link>
        </Item>
        <Item>
          <Link to="/">CONTACTS</Link>
        </Item>
      </Middle>
      <Wrapper>
        <Left>
          <Link to="/">
            <Image src={logo} alt="MONACO" />
          </Link>
        </Left>
        <Right>
          <Link to="/character">Enter</Link>
          <Link to="/">Cart</Link>
        </Right>
      </Wrapper>
    </>
  );
};
