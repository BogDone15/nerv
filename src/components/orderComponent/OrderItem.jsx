import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperTop = styled.div`
  display: flex;
  align-items: flex-end;
  height: calc(100% - 74.8rem);
  width: 100%;
  padding-bottom: 1.4rem;
  padding-left: 3.3rem;

  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const Content = styled.div``;

const ContentTop = styled.ul`
  display: flex;
  align-items: center;
  height: 4rem;
  width: calc(100% - 1.1rem);
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  padding: 0 1rem 0 3.3rem;
`;

const ContentTopItem = styled.li`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  text-transform: uppercase;
  &:nth-child(1) {
    width: 20%;
  }
  &:nth-child(2) {
    width: 36%;
  }
  &:nth-child(3) {
    width: 9%;
  }
  &:nth-child(4) {
    width: 9%;
  }
  &:nth-child(5) {
    width: 15%;
  }
  &:nth-child(6) {
    width: 11%;
  }
`;

const ContentMainItemRemove = styled.div`
  position: absolute;
  right: 1.8rem;
  top: 1.4rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  & > span {
    display: inline-block;
    background: ${(props) => props.theme.colorBlack};
    width: 100%;
    height: 2px;
    transform: translateX(0rem) rotate(45deg);
    transition: all 0.2s ease;
    &:last-child {
      transform: translateY(-1.3rem) rotate(-45deg);
    }
  }
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 0.3rem);
  height: 50rem;
  overflow-y: auto;
  padding-right: 0.4rem;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${(props) => props.theme.colorBlack};
  }
`;

const ContentMainItemType = styled.div`
  width: 20%;

  & > div {
    &:first-child {
      min-height: 3.5rem;
    }
  }
  & > div {
    &:nth-child(2) {
      margin: 1.7rem 0 2.6rem;
    }
  }
`;

const ContentMainItemInfo = styled.div`
  width: 36%;
  & > div {
    &:first-child {
      min-height: 3.5rem;
    }
  }
  & > div {
    &:nth-child(2) {
      margin: 1.7rem 0 2.6rem;
    }
  }
`;

const ContentMainItemBlock = styled.div`
  & > h3,
  & > p {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorMain};
    transition: all 0.2s ease;
  }
`;

const ContentMainItemColor = styled.div`
  width: 9%;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorMain};
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
`;

const ContentMainItemSize = styled.div`
  width: 9%;
  & > div {
    width: 4.7rem;
    height: 4.7rem;
    border: 1px solid ${(props) => props.theme.colorBlack};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    & > span {
      font-weight: 300;
      font-size: ${(props) => props.theme.fontsm};
      line-height: 1.8rem;
      color: ${(props) => props.theme.colorBlack};
      text-transform: uppercase;
      transition: all 0.2s ease;
    }
  }
`;

const ContentMainItemAmt = styled.div`
  width: 15%;
  & > div {
    width: 4.7rem;
    height: 4.7rem;
    border: 1px solid ${(props) => props.theme.colorBlack};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    & > span {
      font-weight: 300;
      font-size: ${(props) => props.theme.fontsm};
      line-height: 1.8rem;
      color: ${(props) => props.theme.colorBlack};
      text-transform: uppercase;
      transition: all 0.2s ease;
    }
  }
`;

const ContentMainItemPrice = styled.div`
  width: 11%;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorMain};
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
`;

const ContentMainItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.6rem 1rem 2.6rem 3.3rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  transition: all 0.2s ease;
  &:hover {
    background: ${(props) => props.theme.colorMain};
    ${ContentMainItemRemove} {
      & > span {
        background: ${(props) => props.theme.colorGray};
      }
    }
    ${ContentMainItemPrice} {
      & > span {
        color: ${(props) => props.theme.colorGray};
      }
    }
    ${ContentMainItemColor} {
      & > span {
        color: ${(props) => props.theme.colorGray};
      }
    }
    ${ContentMainItemBlock} {
      & > h3,
      & > p {
        color: ${(props) => props.theme.colorGray};
      }
    }

    ${ContentMainItemSize} {
      & > div {
        border: 1px solid ${(props) => props.theme.colorGray};
        & > span {
          color: ${(props) => props.theme.colorGray};
        }
      }
    }

    ${ContentMainItemAmt} {
      & > div {
        border: 1px solid ${(props) => props.theme.colorGray};
        & > span {
          color: ${(props) => props.theme.colorGray};
        }
      }
    }
  }
`;

const ContentPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  padding: 3rem 3.3rem;
  width: calc(100% - 1.1rem);
`;

const ContentPriceItem = styled.div`
  &:last-child {
    text-align: right;
  }
  & > div {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorMain};
    margin-bottom: 0.2rem;
    &:last-child {
      font-weight: 600;
      margin-bottom: 0;
    }
  }
`;

const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0 1.1rem;
  height: 6.8rem;
  width: calc(100% - 1.1rem);
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  & > a {
    width: calc(50% - 0.4rem);
    text-align: center;
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: #adadad;
    background: ${(props) => props.theme.colorMain};
    padding: 1.3rem 0;
  }
`;

export const OrderItem = () => {
  return (
    <>
      <WrapperTop>
        <span>ORDER DETAILS</span>
      </WrapperTop>
      <Content>
        <ContentTop>
          <ContentTopItem>TYPE</ContentTopItem>
          <ContentTopItem>INFO</ContentTopItem>
          <ContentTopItem>COLOR</ContentTopItem>
          <ContentTopItem>SIZE</ContentTopItem>
          <ContentTopItem>AMT</ContentTopItem>
          <ContentTopItem>PRICE</ContentTopItem>
        </ContentTop>
        <ContentMain>
          <ContentMainItem>
            <ContentMainItemRemove>
              <span></span>
              <span></span>
            </ContentMainItemRemove>
            <ContentMainItemType>
              <ContentMainItemBlock>
                <h3>MODEL #</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>APPLICATION</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>IN STOCK</h3>
              </ContentMainItemBlock>
            </ContentMainItemType>
            <ContentMainItemInfo>
              <ContentMainItemBlock>
                <p>V91-WS</p>
                <p>Windstopper® PrimaLoft® Modular Liner</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ARMOR</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ONLY 1 ITEM LEFT</p>
              </ContentMainItemBlock>
            </ContentMainItemInfo>
            <ContentMainItemColor>
              <span>black</span>
            </ContentMainItemColor>
            <ContentMainItemSize>
              <div>
                <span>M</span>
              </div>
            </ContentMainItemSize>
            <ContentMainItemAmt>
              <div>
                <span>01</span>
              </div>
            </ContentMainItemAmt>
            <ContentMainItemPrice>
              <span>EUR 800.00</span>
            </ContentMainItemPrice>
          </ContentMainItem>
          <ContentMainItem>
            <ContentMainItemRemove>
              <span></span>
              <span></span>
            </ContentMainItemRemove>
            <ContentMainItemType>
              <ContentMainItemBlock>
                <h3>MODEL #</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>APPLICATION</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>IN STOCK</h3>
              </ContentMainItemBlock>
            </ContentMainItemType>
            <ContentMainItemInfo>
              <ContentMainItemBlock>
                <p>V91-WS</p>
                <p>Windstopper® PrimaLoft® Modular Liner</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ARMOR</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ONLY 1 ITEM LEFT</p>
              </ContentMainItemBlock>
            </ContentMainItemInfo>
            <ContentMainItemColor>
              <span>black</span>
            </ContentMainItemColor>
            <ContentMainItemSize>
              <div>
                <span>M</span>
              </div>
            </ContentMainItemSize>
            <ContentMainItemAmt>
              <div>
                <span>01</span>
              </div>
            </ContentMainItemAmt>
            <ContentMainItemPrice>
              <span>EUR 800.00</span>
            </ContentMainItemPrice>
          </ContentMainItem>
          <ContentMainItem>
            <ContentMainItemRemove>
              <span></span>
              <span></span>
            </ContentMainItemRemove>
            <ContentMainItemType>
              <ContentMainItemBlock>
                <h3>MODEL #</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>APPLICATION</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>IN STOCK</h3>
              </ContentMainItemBlock>
            </ContentMainItemType>
            <ContentMainItemInfo>
              <ContentMainItemBlock>
                <p>V91-WS</p>
                <p>Windstopper® PrimaLoft® Modular Liner</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ARMOR</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ONLY 1 ITEM LEFT</p>
              </ContentMainItemBlock>
            </ContentMainItemInfo>
            <ContentMainItemColor>
              <span>black</span>
            </ContentMainItemColor>
            <ContentMainItemSize>
              <div>
                <span>M</span>
              </div>
            </ContentMainItemSize>
            <ContentMainItemAmt>
              <div>
                <span>01</span>
              </div>
            </ContentMainItemAmt>
            <ContentMainItemPrice>
              <span>EUR 800.00</span>
            </ContentMainItemPrice>
          </ContentMainItem>
          <ContentMainItem>
            <ContentMainItemRemove>
              <span></span>
              <span></span>
            </ContentMainItemRemove>
            <ContentMainItemType>
              <ContentMainItemBlock>
                <h3>MODEL #</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>APPLICATION</h3>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <h3>IN STOCK</h3>
              </ContentMainItemBlock>
            </ContentMainItemType>
            <ContentMainItemInfo>
              <ContentMainItemBlock>
                <p>V91-WS</p>
                <p>Windstopper® PrimaLoft® Modular Liner</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ARMOR</p>
              </ContentMainItemBlock>
              <ContentMainItemBlock>
                <p>ONLY 1 ITEM LEFT</p>
              </ContentMainItemBlock>
            </ContentMainItemInfo>
            <ContentMainItemColor>
              <span>black</span>
            </ContentMainItemColor>
            <ContentMainItemSize>
              <div>
                <span>M</span>
              </div>
            </ContentMainItemSize>
            <ContentMainItemAmt>
              <div>
                <span>01</span>
              </div>
            </ContentMainItemAmt>
            <ContentMainItemPrice>
              <span>EUR 800.00</span>
            </ContentMainItemPrice>
          </ContentMainItem>
        </ContentMain>
        <ContentPrice>
          <ContentPriceItem>
            <div>SUBTOTAL</div>
            <div>SHIPPING</div>
            <div>TAX INCLUDED</div>
            <div>TOTAL</div>
          </ContentPriceItem>
          <ContentPriceItem>
            <div>USD 800.00</div>
            <div>0.00</div>
            <div>0.00</div>
            <div>USD 800.00</div>
          </ContentPriceItem>
        </ContentPrice>
        <ContentBottom>
          <Link to="/">
            <span>COMPLETE THE SET</span>
          </Link>
          <Link to="/checkout">
            <span>CHECKOUT</span>
          </Link>
        </ContentBottom>
      </Content>
    </>
  );
};
