import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <Link to="/terms">TERMS OF CONDITION</Link>
        </Item>
        <Item>
          <Link to="/terms">PRIVATE POLICY </Link>
        </Item>
        <Item>
          <Link to="/terms">SHIPPING</Link>
        </Item>
        <Item>
          <Link to="/terms">RETURN</Link>
        </Item>
        <Item>
          <Link to="/corporation">CORPORATION</Link>
        </Item>
        <Item>
          <Link to="/corporation">CONTACTS</Link>
        </Item>
      </Middle>
    </>
  );
};
