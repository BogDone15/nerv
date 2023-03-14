import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { ContactInfo } from '../components/checkoutComponent/ContactInfo';
import { Summary } from '../components/checkoutComponent/Summary';
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
  width: 4.5rem;
  margin-top: 0.9rem;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
`;

const AsideTop = styled.div`
  height: 6.6rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
  height: calc(100% - 9.7rem);
  width: 100%;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: #878787;
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4.5rem);
  height: 100%;
`;

const GearPreview = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 4.5rem;
  margin-top: 0.9rem;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const Checkout = () => {
  return (
    <Wrapper>
      <Block>
        <Aside>
          <AsideTop />
          <AsideMiddle>CHECKOUT</AsideMiddle>
        </Aside>
        <GearPreview>
          <AsideTop />
        </GearPreview>
        <Right>
          <Header />
          <Nav>
            <Link to="/">Main</Link>
            <span>&gt;</span>
            <Link to="/character">CHARACTER INTERFACE</Link>
            <span>&gt;</span>
            <Link to="/item">A31 JACKET</Link>
            <span>&gt;</span>
            <Link to="/order">ORDER DETAILS</Link>
            <span>&gt;</span>
            <Link to="/checkout">CHECKOUT</Link>
          </Nav>
          <Group>
            <Summary />
            <ContactInfo />
            <Socials />
          </Group>
        </Right>
      </Block>
      <Footer />
    </Wrapper>
  );
};
