import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Socials } from '../components/Socials';
import { AugmentationsMenu } from '../components/AugmentationsMenu';
import { Hero } from '../components/Hero';
import { Gear } from '../components/Gear';
import { Appearance } from '../components/Appearance';
import { Window } from '../components/Window';

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
  width: 4.5rem;
  margin-top: 0.9rem;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
`;

const AsideText = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colorGray};
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      bottom: -4.5rem;
      content: '';
      background: ${(props) => props.theme.colorGray};
      width: 100%;
      height: 1px;
    }
  }
`;

const AsideTop = styled.div`
  height: 6.6rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
  height: 7.8rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #878787;
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AsideBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 18rem);
  padding: 3.3rem 0;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4.5rem);
  height: 100%;
`;

const Group = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const Character = () => {
  return (
    <Wrapper>
      <Block>
        <Aside>
          <AsideTop />
          <AsideMiddle>HEAD</AsideMiddle>
          <AsideBottom>
            <AsideText>TXT</AsideText>
            <AsideText>FILTER / MENU</AsideText>
            <AsideText>FIRST EXPANSION</AsideText>
          </AsideBottom>
        </Aside>
        <Right>
          <Header />
          <Group>
            <AugmentationsMenu />
            <Hero />
            <Gear />
            <Appearance />
            <Window />
            <Socials />
          </Group>
        </Right>
      </Block>
      <Footer />
    </Wrapper>
  );
};
