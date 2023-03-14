import React from 'react';
import styled from 'styled-components';
import jacket from '../../assets/jacket.svg';

const GearWrapper = styled.div`
  position: relative;
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  max-width: 40.9rem;
  width: 100%;
  height: 100%;
  &:after {
    position: absolute;
    content: '';
    right: 0.8rem;
    top: 0;
    width: 1px;
    height: 100%;
    background: ${(props) => props.theme.colorBorder};
  }
`;

const GearTop = styled.div`
  height: 7.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding-left: 2rem;
  color: #000000;
`;

const GearMainView = styled.span`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  & > span {
    color: ${(props) => props.theme.colorGray};
  }
`;

const GearMain = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.7rem 0.2rem 1rem 1.5rem;
  height: calc(100% - 7.8rem);
`;

const GearBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.8rem;
  padding: 1rem 1.7rem 0 0;
  overflow-y: auto;
  height: 74rem;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${(props) => props.theme.colorBlack};
  }
`;

const GearCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: ${(props) => (props.active ? '1' : ' 0.5')};
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 90%;
  width: auto;
  margin: auto;
`;

const GearStatus = styled.div`
  position: absolute;
  top: -0.65rem;
  right: 0.5rem;
  height: 1.4rem;
  width: 6.7rem;
  background: ${(props) => props.theme.colorMain};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > span {
    font-weight: 450;
    font-size: 1rem;
    line-height: 1.3rem;
    color: #adadad;
    text-transform: uppercase;
  }
`;

const GearAside = styled.div`
  position: absolute;
  left: -0.65rem;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colorMain};
  clip-path: polygon(6% 0, 10% 8%, 10% 100%, 0 100%, 0 0);
  opacity: ${(props) => (props.active ? '1' : ' 0')};
  transition: all 0.2s ease;
`;

const GearLine = styled.div`
  position: absolute;
  right: -0.1rem;
  bottom: 1.2rem;
  height: 2.1rem;
  width: 0.4rem;
  background: ${(props) => props.theme.colorMain};
  opacity: ${(props) => (props.active ? '1' : ' 0')};
  transition: all 0.2s ease;
`;

const GearItem = styled.div`
  position: relative;
  background: ${(props) => props.theme.colorBorder};
  width: calc(50% - 0.9rem);
  height: 16.8rem;
  cursor: pointer;
  pointer-events: ${(props) => (props.absent ? 'none' : 'auto')};
  &:hover {
    ${GearCover} {
      opacity: 1;
    }
    ${GearLine} {
      opacity: 1;
    }
    ${GearAside} {
      opacity: 1;
    }
  }
`;

export const Gear = () => {
  return (
    <GearWrapper>
      <GearTop>GEAR ENGINEERING</GearTop>
      <GearMain>
        <GearMainView>
          <span>MODEL LINE</span> [ ARMOR ]
        </GearMainView>
        <GearBlock>
          <GearItem>
            <GearStatus>
              <span>New</span>
            </GearStatus>
            <GearCover active="true">
              <GearAside active="true" />
              <GearLine active="true" />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem>
            <GearStatus>
              <span>New</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem absent="true">
            <GearStatus>
              <span>Soon</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem absent="true">
            <GearStatus>
              <span>Soon</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem absent="true">
            <GearStatus>
              <span>Soon</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem absent="true">
            <GearStatus>
              <span>Soon</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem absent="true">
            <GearStatus>
              <span>Soon</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
          <GearItem absent="true">
            <GearStatus>
              <span>Soon</span>
            </GearStatus>
            <GearCover>
              <GearAside />
              <GearLine />
              <Image src={jacket} alt="Nerv" />
            </GearCover>
          </GearItem>
        </GearBlock>
      </GearMain>
    </GearWrapper>
  );
};
