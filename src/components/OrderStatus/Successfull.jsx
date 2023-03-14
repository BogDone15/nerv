import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Status } from '../Status';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  border: 1px solid ${(props) => props.theme.colorBlack};
`;

const Top = styled.div`
  background: ${(props) => props.theme.colorBlack};
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 10px 0 32px;
  & > a {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    cursor: pointer;
    & > span {
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colorGray};
      transform: translateX(11px) rotate(-45deg);
      transition: all 0.2s ease;
      &:last-child {
        transform: translateX(-6px) rotate(45deg);
      }
    }

    &:hover {
      & > span {
        background: #e0dfdf;
      }
    }
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  & > span {
    width: 13px;
    height: 13px;
    background: #b2b2b2;
    border-radius: 50%;
  }
`;

const Main = styled.div`
  padding: 32px 240px 47px 58px;
  & > div {
    margin-bottom: 19px;
    &:last-child {
      margin-bottom: 0;
      & > p {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #1e1e1e;
      }
    }
    & > p {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      color: ${(props) => props.theme.colorBlack};
    }
  }
`;

export const Successfull = () => {
  return (
    <Wrapper>
      <Status status="ACCESS" color="#FFA300" />
      <Item>
        <Top>
          <Left>
            <span></span>
            <span></span>
            <span></span>
          </Left>
          <Link to="/">
            <span></span>
            <span></span>
          </Link>
        </Top>
        <Main>
          <div>
            <p>using System;</p>
            <p>using System.Collections.Generic;</p>
            <p>using System.Data;</p>
            <p>using System.Data.SqlClient;</p>
            <p>using System.Linq;</p>
            <p>using System.Text;</p>
            <p>using Microsoft.SqlServer.Server;</p>
          </div>
          <div>
            <p>namespace</p>
            <p> &#123;</p>
            <p>// &lt;summary&gt;</p>
          </div>
          <div>
            <p>[ YOUR ORDER HAS BEEN SUCCESSFULLY PLACED ]</p>
            <p>[ CHECK YOUR EMAIL FOR CONFIRMATION ] </p>
          </div>
        </Main>
      </Item>
    </Wrapper>
  );
};
