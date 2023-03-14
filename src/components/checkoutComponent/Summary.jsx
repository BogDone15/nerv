import React from 'react';
import styled from 'styled-components';
import jacketPreview from '../../assets/jacket-preview.svg';

const Wrapper = styled.div`
  width: 35%;
  height: 100%;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: 6.8rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  padding-left: 0.7rem;
  padding-bottom: 0.7rem;
  & > h2 {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const WrapperTop = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  height: 4.6rem;
  width: 100%;
  padding-right: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const WrapperTopItem = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  &:nth-child(2) {
    gap: 10rem;
    padding-left: 2.3rem;
  }

  &:first-child {
    width: 18%;
    padding-left: 0.7rem;
    border-right: 1px solid ${(props) => props.theme.colorBorder};
  }
  &:last-child {
    align-items: center;
    justify-content: center;
    width: 22%;
    border-right: none;
  }
`;

const WrapperCover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    right: 1.1rem;
    top: 0;
    content: '';
    width: 1px;
    height: 66rem;
    background: ${(props) => props.theme.colorBorder};
    @media screen and (max-height: 1060px) {
      height: 60rem;
    }
  }
`;

const WrapperBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(100% - 77.4rem);
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  width: calc(100% - 1.1rem);

  @media screen and (max-height: 1060px) {
    height: calc(100% - 71.4rem);
  }
`;

const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 66rem;
  overflow-y: auto;
  width: calc(100% - 0.3rem);
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${(props) => props.theme.colorBlack};
  }
  @media screen and (max-height: 1060px) {
    height: 60rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 11rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const ItemImage = styled.div`
  width: 18%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  padding: 0.7rem;
`;

const ItemImageCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colorBorder};
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  max-height: 6.5vh;
  width: auto;
  max-width: 100%;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  padding: 1rem 1rem 1rem 2.3rem;

  & > p {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontxsm};
    line-height: 1.4rem;
    color: ${(props) => props.theme.colorBlack};
  }
  & > div {
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.colorBlack};
    margin-top: 0.9rem;
  }
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  padding: 1rem;
  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const WrapperBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 60%;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  &:first-child {
    width: 18%;
    border-right: 1px solid ${(props) => props.theme.colorBorder};
  }

  &:nth-child(2) {
    padding-left: 2.3rem;
  }

  &:last-child {
    width: 22%;
    border-right: none;
    align-items: flex-end;
    padding-right: 1.7rem;
  }
  & > div {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
    &:last-child {
      font-weight: 600;
    }
  }
`;

export const Summary = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <h2>SUMMARY</h2>
      </WrapperTitle>
      <WrapperTop>
        <WrapperTopItem>PREVIEW</WrapperTopItem>
        <WrapperTopItem>
          <span>TXT</span>
          <span>INFO</span>
        </WrapperTopItem>
        <WrapperTopItem>PRICE</WrapperTopItem>
      </WrapperTop>
      <WrapperCover>
        <WrapperMain>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
          <Item>
            <ItemImage>
              <ItemImageCover>
                <Image src={jacketPreview} alt="Nerv" />
              </ItemImageCover>
            </ItemImage>
            <ItemInfo>
              <p>V91-WS</p>
              <p>Windstopper® PrimaLoft® Modular Liner </p>
              <p>Vest</p>
              <div>ARMOR / BLACK / SMALL</div>
            </ItemInfo>
            <ItemPrice>
              <span>EUR 800.00</span>
            </ItemPrice>
          </Item>
        </WrapperMain>
        <WrapperBottom>
          <WrapperBottomItem />
          <WrapperBottomItem>
            <div>SUBTOTAL</div>
            <div>SHIPPING</div>
            <div>TAX INCLUDED</div>
            <div>TOTAL</div>
          </WrapperBottomItem>
          <WrapperBottomItem>
            <div>USD 800.00</div>
            <div>0.00</div>
            <div>0.00</div>
            <div>USD 800.00</div>
          </WrapperBottomItem>
        </WrapperBottom>
      </WrapperCover>
    </Wrapper>
  );
};
