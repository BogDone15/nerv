import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { singleProductImages } from '../SlidesImgData';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { ZoomImage } from '../productComponent/ZoomImage';

const MainWrapper = styled.div`
  padding: 2rem;
  width: calc(100% - 10rem);
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

const MainLeft = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainLeftTop = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colorBlack};
  border-top-right-radius: 3rem;
  padding-top: 3.7rem;
`;
const Angle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: ${(props) => props.theme.colorMain};
  border-top-right-radius: 3rem;
  padding: 0.7rem 3.6rem 0.7rem 8rem;
  & > span {
    font-weight: 450;
    font-size: 1.3rem;
    line-height: 1.7rem;
    color: #adadad;
    text-transform: uppercase;
  }
`;
const Model = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 3.5rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};
`;
const ModelBlock = styled.div``;

const ModelBlockName = styled.h3`
  font-weight: 450;
  font-size: 3rem;
  line-height: 3.9rem;
  color: ${(props) => props.theme.colorBlack};
  text-transform: uppercase;
`;
const ModelBlockType = styled.h4`
  font-weight: 450;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  margin-bottom: 0.7rem;
  text-transform: uppercase;
`;
const ModelBlockTypeName = styled.p`
  font-weight: 450;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  text-transform: uppercase;
`;
const ModelPrice = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colorBlack};
`;
const Item = styled.div`
  position: relative;
  padding: 1.5rem 3.5rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};

  &:last-child {
    border-bottom: 0;
  }
`;
const Title = styled.h2`
  position: absolute;
  left: 2.5rem;
  top: -0.9rem;
  background: #cecece;
  padding: 0 1.3rem;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  text-transform: uppercase;
`;

const Content = styled.div`
  & > div {
    &:nth-child(2) {
      & > p {
        margin-bottom: 1.7rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colorBlack};
  margin-bottom: 0.1rem;
`;

const MainLeftBottom = styled.div``;

const MainLeftBottomContent = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid ${(props) => props.theme.colorBlack};
  margin-top: 2.5rem;
`;

const Cover = styled.div`
  position: relative;
  width: 50%;
  padding: 1.6rem 2.8rem 0.8rem 3rem;

  &:first-child {
    border-right: 1px solid ${(props) => props.theme.colorBlack};
  }
`;

const CoverTitle = styled.h2`
  position: absolute;
  left: 2.5rem;
  top: -0.9rem;
  background: #cecece;
  padding: 0 1.3rem;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  text-transform: uppercase;
`;
const CoverSizes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const CoverItem = styled.div`
  position: relative;
  width: 4.1rem;
  height: 4.1rem;
  border: 1px solid ${(props) => props.theme.colorBlack};
  cursor: pointer;

  & > span {
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontxsm};
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
  }
`;

const CoverColors = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
`;

const ColorBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
`;

const ColorItem = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme.colorBlack};
  cursor: pointer;
  &:last-child {
    background: linear-gradient(0deg, #24391d, #24391d);
  }
`;
const ColorName = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colorBlack};
  text-transform: uppercase;
`;

const CoverQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const CoverContent = styled.div``;

const CoverInStock = styled.div`
  font-weight: 400;
  line-height: 1.7rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colorBlack};
  margin-bottom: 0.3rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CoverChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 5.5rem;

  & > div {
    border-radius: 50%;
    background: ${(props) => props.theme.colorBlack};
    width: 1.2rem;
    height: 1.2rem;
  }

  & > span {
    font-weight: 400;
    line-height: 1.7rem;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const Decoration = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colorBlack};
  border-bottom-left-radius: 3rem;
  display: flex;
  align-items: center;
  &::after {
    position: absolute;
    right: 50%;
    top: 0;
    transform: translate(-50%);
    content: '';
    width: 1px;
    height: 100%;
    background: ${(props) => props.theme.colorBlack};
  }
`;
const DecorationLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 1.8rem;
  & > span {
    background: ${(props) => props.theme.colorBlack};
    width: 0.9rem;
    height: 1px;
    transform: translateX(0.9rem) rotate(45deg);
    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;
const DecorationRight = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontxsm};
    line-height: 1.5rem;
    color: ${(props) => props.theme.colorBlack};
    margin: 0 3.4rem;
    padding: 0.85rem 0;
    text-transform: uppercase;
  }
`;
const Square = styled.div`
  position: relative;
  max-width: 4.3rem;
  width: 100%;
  height: 3.2rem;
  border-left: 1px solid ${(props) => props.theme.colorBlack};
  border-right: 1px solid ${(props) => props.theme.colorBlack};
  &::after {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100% + 1.1rem);
    height: 1px;
    content: '';
    background: ${(props) => props.theme.colorBlack};
    transform: translate(-50%, -50%) rotate(38deg);
  }
`;

const Button = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  background: ${(props) => props.theme.colorBlack};
  margin: 0.9rem 0;
  text-align: center;
  cursor: pointer;
  & > span {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: #adadad;
    text-align: center;
    text-transform: uppercase;
  }
`;

const MainRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 58%;
  border: 1px solid ${(props) => props.theme.colorBlack};
`;

const MainRightAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colorBlack};
  padding: 3.1rem 1.1rem;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorGray};
    transform: rotate(-180deg);
    writing-mode: vertical-lr;
  }
`;
const MainRightContent = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 4.1rem);
  & > div {
    &:nth-child(2) {
      height: 100%;
      & > div {
        & > div {
          display: flex;
          align-items: flex-end;
          height: 100%;
        }
      }
    }
  }
`;
const Position = styled.div`
  position: absolute;
  right: 4rem;
  top: 2.6rem;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontmd};
  line-height: 1.7rem;
  color: ${(props) => props.theme.colorBlack};
`;
const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;
const Corner = styled.div`
  position: absolute;
  z-index: 5;
  right: 3.6rem;
  bottom: 3.6rem;
`;
const CornerTop = styled.div`
  margin-bottom: 2rem;
  text-align: right;
  & > p {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontmd};
    line-height: 1.7rem;
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
  }
`;
const CornerBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontmd};
    line-height: 1.7rem;
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
  }
`;
const Plus = styled.svg`
  width: 3.8rem;
  height: 3.8rem;
  fill: none;
  cursor: pointer;
  & > path {
    fill: black;
    transition: all 0.2s ease;
  }
  /* &:hover {
    path {
      fill: ${(props) => props.theme.colorBorder};
    }
  } */
`;

const ArrowPrev = styled.svg`
  position: absolute;
  left: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 9px;
  height: 16px;
  fill: none;
  pointer-events: ${(props) => (props.fistSlide ? 'none' : 'auto')};
  & > path {
    fill: #a0a0a0;
    transition: all 0.2s ease;
  }
  &:hover {
    & > path {
      fill: ${(props) => props.theme.colorMain};
    }
  }
`;

const ArrowNext = styled.svg`
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 9px;
  height: 16px;
  fill: none;
  pointer-events: ${(props) => (props.lastSlide ? 'none' : 'auto')};
  & > path {
    fill: #a0a0a0;
    transition: all 0.2s ease;
  }
  &:hover {
    & > path {
      fill: ${(props) => props.theme.colorMain};
    }
  }
`;

export const SingleProduct = () => {
  const [slides, setSlides] = useState([]);
  const [lastSlide, setLastSlide] = useState(false);
  const [fistSlide, setFirstSlide] = useState(true);
  const [showZoomImage, setShowZoomImage] = useState(false);

  const handleShowImage = () => {
    setShowZoomImage(true);
  };

  useEffect(() => {
    setSlides(singleProductImages);
  }, []);

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <ArrowPrev
        viewBox="0 0 9 16"
        onClick={() => swiper.slidePrev()}
        fistSlide={fistSlide}
      >
        <path d="M8.95001 13.09H6.84003V15.2H8.95001V13.09Z" />
        <path d="M6.84003 10.98H4.72998V13.09H6.84003V10.98Z" />
        <path d="M4.71997 8.85999H2.60999V10.97H4.71997V8.85999Z" />
        <path d="M2.60999 6.75H0.5V8.85999H2.60999V6.75Z" />
        <path d="M4.71997 4.64001H2.60999V6.75H4.71997V4.64001Z" />
        <path d="M6.84003 2.52002H4.72998V4.63H6.84003V2.52002Z" />
        <path d="M8.95001 0.409973H6.84003V2.52002H8.95001V0.409973Z" />
      </ArrowPrev>
    );
  };

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <ArrowNext
        viewBox="0 0 9 16"
        onClick={() => swiper.slideNext()}
        lastSlide={lastSlide}
      >
        <path d="M2.53003 0.619995H0.420044V2.72998H2.53003V0.619995Z" />
        <path d="M4.64001 2.73999H2.53003V4.84998H4.64001V2.73999Z" />
        <path d="M6.75 4.84998H4.64001V6.96002H6.75V4.84998Z" />
        <path d="M8.85999 6.96002H6.75V9.07001H8.85999V6.96002Z" />
        <path d="M6.75 9.07001H4.64001V11.18H6.75V9.07001Z" />
        <path d="M4.64001 11.19H2.53003V13.3H4.64001V11.19Z" />
        <path d="M2.53003 13.3H0.420044V15.41H2.53003V13.3Z" />
      </ArrowNext>
    );
  };

  return (
    <>
      <ZoomImage
        showZoomImage={showZoomImage}
        setShowZoomImage={setShowZoomImage}
      />
      <MainWrapper>
        <MainLeft>
          <MainLeftTop>
            <Angle>
              <span>LEGENDARY EDITION</span>
            </Angle>
            <Model>
              <ModelBlock>
                <ModelBlockName>A31 JACKET</ModelBlockName>
                <ModelBlockType>MODEL TYPE</ModelBlockType>
                <ModelBlockTypeName>[ ARMOR ]</ModelBlockTypeName>
              </ModelBlock>
              <ModelPrice>1200.00 USD</ModelPrice>
            </Model>
            <Content>
              <Item>
                <Title>TECHNICAL INFORMATION</Title>
                <Text>3L GORE-TEX® PRO [Most breathable technology]</Text>
                <Text>_(72% PA, 28% ePTFE)</Text>
                <Text>
                  _With solution-dyed Micro Grid™ backer for improved
                  environmental footprint
                </Text>
                <Text>_GUARANTEED TO KEEP YOU DRY™</Text>
              </Item>
              <Item>
                <Title>SPECIFICATION</Title>
                <Text>
                  Korean exclusive .................................... most
                  celebr ated wide-spectrum jacket. Outside of the J1E, they are
                  the first J1A equipped with a TensionZipǽ flak pocket and 3
                  layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be
                  identified by its high-gloss WR zippers, unique dual tone flak
                  pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř
                  logo tape.
                </Text>
                <Text>
                  *J1A was the first ever jacket designed by ǍCROŇYMř.
                  Originally conceived in the years between 1999 and 2001, it is
                  the progenitor of the Type 2371**, and of every other ǍCROŇYMř
                  jacket that has followed.
                </Text>
                <Text>
                  J1A-GT is the culmination of everything we have learned about
                  building apparel since that time.{' '}
                </Text>
              </Item>
              <Item>
                <Title>CARE SPECIFICATION</Title>
                <Text>
                  Should be ironed at a temperature between 180°C - 210°C
                </Text>
                <Text>
                  Can be dry cleaned / Use solvent of perchloroethylene or of
                  petroleum based solvent
                </Text>
                <Text>
                  Hang dry / Tumble dry possible / Normal drying cycle
                </Text>
              </Item>
            </Content>
          </MainLeftTop>
          <MainLeftBottom>
            <MainLeftBottomContent>
              <Cover>
                <CoverTitle>OPTIONS</CoverTitle>
                <CoverSizes>
                  <CoverItem>
                    <span>xs</span>
                  </CoverItem>
                  <CoverItem>
                    <span>s</span>
                  </CoverItem>
                  <CoverItem>
                    <span>m</span>
                  </CoverItem>
                  <CoverItem>
                    <span>l</span>
                  </CoverItem>
                  <CoverItem>
                    <span>xl</span>
                  </CoverItem>
                </CoverSizes>
                <CoverColors>
                  <ColorBlock>
                    <ColorItem></ColorItem>
                    <ColorItem></ColorItem>
                  </ColorBlock>
                  <ColorName>Black</ColorName>
                </CoverColors>
              </Cover>
              <Cover>
                <CoverTitle>QUANTITY</CoverTitle>
                <CoverQuantity>
                  <CoverItem>
                    <span>01</span>
                  </CoverItem>
                  <CoverContent>
                    <CoverInStock>LIMITED EDITION - 1/100</CoverInStock>
                    <CoverInStock>LEFT 2 IN STOCK</CoverInStock>
                  </CoverContent>
                </CoverQuantity>
                <CoverChart>
                  <div></div>
                  <span>SIZE CHART</span>
                </CoverChart>
              </Cover>
            </MainLeftBottomContent>
          </MainLeftBottom>
          <Button>
            <span>ADD TO EQUIP</span>
          </Button>
          <Decoration>
            <DecorationLeft>
              <span></span>
              <span></span>
            </DecorationLeft>
            <DecorationRight>
              <span>FIRE UP NERV INSIDE</span>
              <Square></Square>
            </DecorationRight>
          </Decoration>
        </MainLeft>
        <MainRight>
          <MainRightAside>
            <span>CHARACTER ARAMETERS</span>
            <span>VISUAL ASSISTANT</span>
            <span>IMAGE QUANTITY</span>
          </MainRightAside>
          <MainRightContent>
            <Position>01/06</Position>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              onSlideChange={(swiper) => {
                swiper.activeIndex === swiper.slides.length - 1
                  ? setLastSlide(true)
                  : setLastSlide(false);
                swiper.activeIndex === 0
                  ? setFirstSlide(true)
                  : setFirstSlide(false);
              }}
            >
              {slides.map((item) => (
                <SwiperSlide>
                  <Image key={item.id} src={item.img} alt="Nerv" />
                </SwiperSlide>
              ))}
              <SwiperButtonPrev />
              <SwiperButtonNext />
            </Swiper>
            <Corner>
              <CornerTop>
                <p>MODEL M SIZE</p>
                <p>180 CM TALL</p>
                <p>360* AVAILIBLE</p>
              </CornerTop>
              <CornerBottom>
                <span>OPTICAL ZOOM</span>
                <Plus viewBox="0 0 38 38" onClick={() => handleShowImage()}>
                  <path d="M37.88 37.6899H31.63V37.09H37.28V31.4399H37.88V37.6899Z" />
                  <path d="M23.5 37.0901H15.37V37.6901H23.5V37.0901Z" />
                  <path d="M7.22998 37.6899H0.98999V31.4399H1.57996V37.09H7.22998V37.6899Z" />
                  <path d="M1.58997 15.1699H0.98999V23.2999H1.58997V15.1699Z" />
                  <path d="M1.57996 7.04004H0.98999V0.790039H7.22998V1.39008H1.57996V7.04004Z" />
                  <path d="M23.5 0.790039H15.37V1.39008H23.5V0.790039Z" />
                  <path d="M37.88 7.04004H37.28V1.39008H31.63V0.790039H37.88V7.04004Z" />
                  <path d="M37.88 15.1799H37.28V23.3099H37.88V15.1799Z" />
                  <path d="M19.76 10.4399H19.3101V26.84H19.76V10.4399Z" />
                  <path d="M27.9301 18.3301H11.53V18.7801H27.9301V18.3301Z" />
                </Plus>
              </CornerBottom>
            </Corner>
          </MainRightContent>
        </MainRight>
      </MainWrapper>
    </>
  );
};
