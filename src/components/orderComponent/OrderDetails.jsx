import React from 'react';
import styled from 'styled-components';
import jacketPreview from '../../assets/jacket-preview.svg';
import previewBg from '../../assets/preview-order-bg.svg';
import { OrderItem } from './OrderItem';

const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 10rem);
  height: 100%;
`;
const WrapperLeft = styled.div`
  width: 28%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
`;

const WrapperTop = styled.div`
  display: flex;
  align-items: flex-end;
  height: calc(100% - 74.8rem);
  width: 100%;
  padding-bottom: 1.4rem;
  padding-left: 2.2rem;

  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const WrapperFake = styled.div`
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  border-top: 1px solid ${(props) => props.theme.colorBorder};
`;

const WrapperPreview = styled.div`
  background: url(${previewBg}) 50% 0 no-repeat;
  background-size: contain;
  width: 100%;
  height: 63.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Image = styled.img`
  max-height: 50vh;
  width: auto;
  max-width: 100%;
`;

const WrapperBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.8rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  cursor: pointer;
  & > span {
    background: ${(props) => props.theme.colorMain};
    width: 2.8rem;
    height: 1px;
    &:last-child {
      transform: translateX(-2.8rem) rotate(90deg);
    }
  }
`;

const WrapperRight = styled.div`
  position: relative;
  width: 73%;
  height: 100%;
  &::after {
    position: absolute;
    right: 1rem;
    top: 0;
    width: 1px;
    height: 100%;
    content: '';
    background: ${(props) => props.theme.colorBorder};
  }
`;

export const OrderDetails = () => {
  return (
    <Wrapper>
      <WrapperLeft>
        <WrapperTop>
          <span>360 PREVIEW IMG</span>
        </WrapperTop>
        <WrapperFake />
        <WrapperPreview>
          <Image src={jacketPreview} alt="nerv" />
        </WrapperPreview>
        <WrapperBottom>
          <span></span>
          <span></span>
        </WrapperBottom>
      </WrapperLeft>
      <WrapperRight>
        <OrderItem />
      </WrapperRight>
    </Wrapper>
  );
};
