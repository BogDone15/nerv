import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Main } from '../components/homeComponent/Main';
import { Nav } from '../components/Nav';
import { Socials } from '../components/Socials';

const Wrapper = styled.div`
  height: calc(100vh - 6vh);
  max-width: 192rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  padding-top: 2rem;
  display: flex;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const Aside = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 4.5rem;
  margin-top: 0.9rem;
  padding-bottom: 3rem;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
`;

const AsideText = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
  color: #878787;
  color: ${(props) => props.theme.colorGray};
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
`;

const Top = styled.div`
  height: calc(4.4rem + 2.2rem);
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  margin-top: calc(1rem + 2.7rem);
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4.5rem);
  height: 100%;
`;

const ChooseBtn = styled.div`
  position: relative;
  width: 5rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > a {
    position: relative;
    font-weight: 450;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colorMain};
    transform: rotate(-180deg) translateY(-4rem);
    writing-mode: vertical-lr;
    overflow: hidden;
    transition: all 0.2s ease;
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 0;
      width: 1px;
      height: 100%;
      background: ${(props) => props.theme.colorMain};
      transform: translateY(-101%);
      backface-visibility: hidden;
      transform-origin: left;
      transition: all 0.2s ease;
    }
  }
  &:hover {
    & > a {
      opacity: 0.7;
      &:before {
        transform: translateY(101%);
      }
    }
  }
`;

const ChooseBtnTop = styled.div`
  position: absolute;
  left: 0;
  top: 4.6rem;
  height: calc(4.4rem + 2.2rem);
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const Line = styled.svg`
  position: absolute;
  right: -1.7rem;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
  width: 20px;
  height: 99%;
  fill: none;
`;

const Group = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 11.2rem);
`;

export const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });

  return (
    <>
      <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      <Wrapper>
        <Block>
          <Aside>
            <Top />
            <AsideText>FIRST EXPANSION</AsideText>
          </Aside>
          <ChooseBtn>
            <ChooseBtnTop />
            <Link to="/character">CHOOSE YOUR APPEARANCE</Link>
            <Line viewBox="0 0 20 990">
              <path
                opacity="0.2"
                d="M0.920044 0.5V409.95L18.72 440.01V629.69L0.920044 655.67V989.5"
                stroke="#191919"
                strokeMiterlimit="10"
              />
            </Line>
          </ChooseBtn>
          <Right>
            <Header />
            <Nav />
            <Group>
              <Main />
              <Socials />
            </Group>
          </Right>
        </Block>
        <Footer />
      </Wrapper>
    </>
  );
};
