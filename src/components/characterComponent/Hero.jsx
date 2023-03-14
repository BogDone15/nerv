import React from 'react';
import styled from 'styled-components';
import itemThird from '../../assets/items/item3.svg';
import itemFourth from '../../assets/items/item4.svg';
import itemFifth from '../../assets/items/item5.svg';
import itemSixth from '../../assets/items/item6.svg';
import itemSeventh from '../../assets/items/item7.svg';
import itemEights from '../../assets/items/item8.svg';
import heroBg from '../../assets/hero-bg.png';
import { motion } from 'framer-motion';

const HeroWrapper = styled.div`
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  max-width: 8.5rem;
  width: 100%;
  height: 100%;
`;

const HeroTop = styled.div`
  height: 7.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const HeroBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const HeroMain = styled.div`
    height: calc(100% - 7.8rem);
  padding: 1.7rem 0.5rem 1rem;
`;

const HeromainView = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 4vh;
  width: auto;
`;

const Lock = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + 0.8rem), -50%);
  width: 1.2rem;
  height: 1.7rem;
  z-index: 3;
  & > rect {
    transform: translateY(5px);
    width: 1.2rem;
    height: 1.7rem;
  }
`;

const GearLine = styled.div`
  position: absolute;
  left: 3px;
  top: -1.2px;
  background: ${(props) => props.theme.colorMain};
  height: 3px;
  max-width: 2rem;
  width: 100%;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.active ? '0' : '1')};
`;

const HeroItemsAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  margin-right: 0.2rem;
  transition: all 0.2s ease;
  transform: ${(props) => (props.active ? 'translateX(-0.4rem)' : 'unset')};

  & > span {
    transform: rotate(-180deg);
    writing-mode: vertical-lr;
    color: ${(props) => props.theme.colorMain};
    font-size: 6px;
    text-transform: uppercase;
  }
`;

const HeroAsideLine = styled.div`
  position: absolute;
  left: -0.4rem;
  top: 0%;
  content: '';
  width: 0.8rem;
  height: 98%;
  background: ${(props) => props.theme.colorMain};
  transition: all 0.2s ease;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

const HeroItems = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.active ? '1' : '0.5')};
`;

const HeroGroup = styled.div`
  position: relative;
  pointer-events: ${(props) => (props.lock ? 'none' : 'auto')};
  cursor: pointer;
  &:hover ${HeroItems} {
    opacity: 1;
  }
  &:hover ${GearLine} {
    opacity: 0;
  }
  &:hover ${HeroAsideLine} {
    opacity: 1;
  }
  &:hover ${HeroItemsAside} {
    transform: translateX(-0.4rem);
  }
`;

const Icon = styled.svg`
  width: 6px;
  height: 7px;
  fill: none;
`;

const HeroItemsContent = styled.div`
  position: relative;
  background-image: url(${heroBg});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.1rem;
  height: 5.2rem;
`;

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTop />
      <HeroMain>
        <HeromainView>Hero</HeromainView>
        <HeroBlock>
          <HeroGroup>
            <HeroItems>
              <HeroItemsAside>
                <Icon viewBox="0 0 3 4">
                  <path
                    d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                    fill="#191919"
                  />
                </Icon>
                <span>cranium</span>
              </HeroItemsAside>
              <HeroItemsContent>
                <HeroAsideLine />
                <GearLine />
                <Image src={itemThird} alt="nerv" />
              </HeroItemsContent>
            </HeroItems>
          </HeroGroup>
          <HeroGroup>
            <HeroItems active="true">
              <HeroItemsAside active="true">
                <Icon viewBox="0 0 3 4">
                  <path
                    d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                    fill="#191919"
                  />
                </Icon>
                <span>hero</span>
              </HeroItemsAside>
              <HeroItemsContent>
                <HeroAsideLine active="true" />
                <GearLine active="true" />
                <Image src={itemFourth} alt="nerv" />
              </HeroItemsContent>
            </HeroItems>
          </HeroGroup>
          <HeroGroup>
            <HeroItems>
              <HeroItemsAside>
                <Icon viewBox="0 0 3 4">
                  <path
                    d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                    fill="#191919"
                  />
                </Icon>
                <span>2nd skin</span>
              </HeroItemsAside>
              <HeroItemsContent>
                <HeroAsideLine />
                <GearLine />
                <Image src={itemFifth} alt="nerv" />
              </HeroItemsContent>
            </HeroItems>
          </HeroGroup>
          <HeroGroup>
            <HeroItems>
              <HeroItemsAside>
                <Icon viewBox="0 0 3 4">
                  <path
                    d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                    fill="#191919"
                  />
                </Icon>
                <span>skin</span>
              </HeroItemsAside>
              <HeroItemsContent>
                <HeroAsideLine />
                <GearLine />
                <Image src={itemSixth} alt="nerv" />
              </HeroItemsContent>
            </HeroItems>
          </HeroGroup>
          <HeroGroup>
            <HeroItems>
              <HeroItemsAside>
                <Icon viewBox="0 0 3 4">
                  <path
                    d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                    fill="#191919"
                  />
                </Icon>
                <span>limbs</span>
              </HeroItemsAside>
              <HeroItemsContent>
                <HeroAsideLine />
                <GearLine />
                <Image src={itemSeventh} alt="nerv" />
              </HeroItemsContent>
            </HeroItems>
          </HeroGroup>
          <HeroGroup lock="true">
            <Lock viewBox="0 0 8.56 12.11">
              <rect />
              <polygon points="8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74" />
            </Lock>
            <HeroItems>
              <HeroItemsAside>
                <Icon viewBox="0 0 3 4">
                  <path
                    d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                    fill="#191919"
                  />
                </Icon>
                <span>attach</span>
              </HeroItemsAside>
              <HeroItemsContent>
                <HeroAsideLine />
                <GearLine />
                <Image src={itemEights} alt="nerv" />
              </HeroItemsContent>
            </HeroItems>
          </HeroGroup>
        </HeroBlock>
      </HeroMain>
    </HeroWrapper>
  );
};
