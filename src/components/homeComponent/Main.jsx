import React from 'react';
import bgImg from '../../assets/main-bg.png';
import charackters from '../../assets/charackters.png';
import styled from 'styled-components';
import { Status } from '../Status';

const TopCorner = styled.div`
  position: absolute;
  top: 2.7rem;
  left: 4.5rem;

  & > div {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5rem;
    color: #adadad;
  }
`;

const Banner = styled.div`
  margin: 1.6rem 0 2.6rem;
  color: ${(props) => props.theme.colorMain} !important;
`;

const TopCornerMargin = styled.div`
  margin-bottom: 1.2rem;
`;

const Block = styled.div`
  position: relative;
  background-image: url(${bgImg});
  background-size: 66%;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(100% - 15rem);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
`;

const Image = styled.img`
  max-width: 100%;
  width: auto;
  max-height: 73vh;
  /* max-width: 62.5rem; */
  margin: 0 auto;
`;

const EXxpansion = styled.div`
  position: relative;
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  width: 7.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  transform: rotate(-180deg);
  font-weight: 300;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorMain};
  writing-mode: vertical-lr;
`;

const Corner = styled.div`
  width: 7.5rem;
  position: absolute;
  right: 4.3rem;
  top: 4.2rem;
  transform: rotate(-180deg);
  & > span {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    width: 100%;
    color: ${(props) => props.theme.colorGray};
    writing-mode: vertical-lr;
  }
`;

const BottomCorner = styled.div`
  position: absolute;
  left: 3rem;
  bottom: 0;
`;

const BottomCornerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 26rem;
  height: 3rem;
`;

const Circle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colorBorder};
`;

const BorderBlock = styled.div`
  position: relative;
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  max-width: 23.5rem;
  width: 100%;
  height: 100%;
  &::after {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    max-width: 13.7rem;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colorBorder};
  }
`;

export const Main = () => {
  return (
    <>
      <TopCorner>
        <div>/ dev</div>
        <div>/ start</div>
        <Banner>/img [ BANNER ]</Banner>
        <TopCornerMargin>/add</TopCornerMargin>
        <TopCornerMargin>[transformation]</TopCornerMargin>
        <TopCornerMargin>/ main hero </TopCornerMargin>
        <div>UTRA BOOST</div>
        <div>YOUR SYSTEM</div>
        <div>IN COMPLETE</div>
        <div>FULL SET</div>
      </TopCorner>
      <BottomCorner>
        <BottomCornerWrapper>
          <Circle />
          <BorderBlock />
        </BottomCornerWrapper>
      </BottomCorner>
      <Block>
        <Status status="online" color="#00c70a" />
        <Image src={charackters} alt="Nerv" />
      </Block>
      <EXxpansion>
        <Corner>
          <span>LATEST EXSPANTION</span>
        </Corner>
        <Info>[ VIGILANTE ]</Info>
      </EXxpansion>
    </>
  );
};
