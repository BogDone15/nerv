import React from 'react';
import styled from 'styled-components';
import corp from '../assets/corp.svg';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 4rem;
`;

const Middle = styled.div`
  clip-path: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
  max-width: 133.5rem;
  width: 100%;
  height: 2.9rem;
  background: ${(props) => props.theme.colorMain};
  margin: 3.1rem auto 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding-top: 1.8rem;
  max-width: 24.5rem;
  width: 100%;

  & > img {
    max-width: 3.3rem;
  }

  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontxsm};
    line-height: 1.4rem;
    color: ${(props) => props.theme.colorGray};
  }
`;

const Right = styled.div`
  padding-top: 2.1rem;
  max-width: 16rem;
  width: 100%;
  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontxsm};
    line-height: 1.4rem;
    color: ${(props) => props.theme.colorGray};
  }
`;

const Image = styled.img``;

export const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <Image src={corp} />
        <span>
          NERV CORPORATION <br />
          ALL RIGHTS RESERVER VER 1.0.1
        </span>
      </Left>
      <Middle></Middle>
      <Right>
        <span>/COMMAND PROTOCOL ATHINA</span>
      </Right>
    </Wrapper>
  );
};
