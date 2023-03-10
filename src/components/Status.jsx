import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 3.4rem;
  top: 2.8rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Circle = styled.div`
  width: 13px;
  height: 13px;
  background: ${(props) => props.color};
  border-radius: 50%;
  animation-name: blinker;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  @keyframes blinker {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StatusText = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colorGray};
  text-transform: uppercase;
`;

export const Status = ({ status, color }) => {
  return (
    <Wrapper>
      <Circle color={color} />
      <StatusText>{status}</StatusText>
    </Wrapper>
  );
};
