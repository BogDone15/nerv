import React from 'react';
import styled from 'styled-components';
import planet from '../../assets/planet.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Wrapper = styled(Tabs)`
  padding: 0 1.5rem 1.9rem;
  width: 100%;
  height: 100%;
`;

const WrapperNav = styled(TabList)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-left: 4.2rem;
  padding-top: 4.8rem;
  margin-bottom: 4.8rem;
`;

WrapperNav.tabsRole = 'TabList';

const WrapperNavItem = styled(Tab)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;

  & > div {
    font-weight: 300;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorMain};
    border: 1px solid #898989;
    padding: 0.3rem 8rem 0.2rem 1.3rem;
    transition: all 0.2s ease;
    &:first-child {
      padding: 0.3rem 0.2rem 0.2rem 0.2rem;
    }
  }

  &:hover {
    & > div {
      background: ${(props) => props.theme.colorMain};
      color: #b2b2b2;
    }
  }

  &.is-selected {
    & > div {
      background: ${(props) => props.theme.colorMain};
      color: #b2b2b2;
      &:last-child {
        padding-right: 20rem;
      }
    }
  }
`;

WrapperNavItem.tabsRole = 'Tab';

const Main = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  height: calc(100% - 12.1rem);
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 29rem;
  width: 100%;
  height: 100%;
`;

const MainLeftTop = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 29rem;
`;

const Image = styled.img`
  max-width: 24.9rem;
  width: 100%;
  margin: auto;
`;

const MainLeftBottom = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorder};
  height: 100%;
`;

const Decoration = styled.div`
  height: 1.4rem;
  width: 100%;
  background: ${(props) => props.theme.colorBlack};
`;

const MainLeftBottomContent = styled.div`
  padding: 2rem 1rem 0 2.7rem;

  & > div {
    margin-bottom: 0.6rem;
    &:last-child {
      margin-bottom: 0;
    }
    & > p {
      font-weight: 400;
      font-size: 5.48px;
      line-height: 7px;
      color: ${(props) => props.theme.colorBlack};
    }
  }
`;

const MainMiddle = styled(TabPanel)`
  display: none;
  position: relative;
  max-width: calc(100% - 39.3rem);
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding-right: 0.3rem;
  overflow: hidden;
  &:after {
    position: absolute;
    content: '';
    right: 1rem;
    top: 0;
    width: 1px;
    height: 100%;
    background: ${(props) => props.theme.colorBorder};
  }

  &.is-selected {
    display: block;
  }
`;

MainMiddle.tabsRole = 'TabPanel';

const MainMiddleLine = styled.div`
  height: 1px;
  width: 70%;
  background: ${(props) => props.theme.colorBlack};
  margin: 2rem 0 4.2rem;
`;

const MainMiddleTitle = styled.div`
  padding-top: 2.9rem;
  padding-left: 4.2rem;
  & > h2 {
    font-weight: 600;
    font-size: 3.2rem;
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
  }
`;

const MainMiddleText = styled.div`
  padding: 0 4.2rem;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${(props) => props.theme.colorBlack};
  }
  & > p {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
    margin-bottom: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Directors = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 1rem;
  font-weight: 450;
  font-size: 1.3rem;
  line-height: 1.7rem;
  color: ${(props) => props.theme.colorBlack};
`;

const MainRight = styled.div`
  max-width: 10.3rem;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colorBorder};
`;

const MainRightTop = styled.div`
  height: 50%;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const MainRightBottom = styled.div`
  height: 50%;
  padding: 2.2rem 1rem 0 1.1rem;

  & > div {
    margin-bottom: 0.7rem;
    &:last-child {
      margin-bottom: 0;
    }
    & > p {
      font-weight: 400;
      font-size: 4.62px;
      line-height: 6px;
      color: #898989;
    }
  }
`;

export const CorporationDetail = () => {
  return (
    <Wrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <WrapperNav>
        <WrapperNavItem>
          <div>[01]</div>
          <div>NERV CORPORATION</div>
        </WrapperNavItem>
        <WrapperNavItem>
          <div>[02]</div>
          <div>CONTACTS</div>
        </WrapperNavItem>
      </WrapperNav>
      <Main>
        <MainLeft>
          <MainLeftTop>
            <Image src={planet} alt="Nerv" />
          </MainLeftTop>
          <MainLeftBottom>
            <Decoration />
            <MainLeftBottomContent>
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
                <p>namespace CodeGenerator</p>
                <p> &#123;</p>
                <p>// &lt;summary&gt;</p>
                <p>// &lt;summary&gt;</p>
                <p>// &lt;summary&gt;</p>
                <p>// &lt;code&gt;</p>
                <p>
                  // using (var connection = new
                  SqlConnection(ConnectionString))
                </p>
                <p>// &#123;</p>
                <p>/// onnection.Open();</p>
                <p>/// ar codeLength = GetCurrentCodeLength(connection);</p>
                <p>
                  /// sing (var generator = new CodeGenerator(connection,
                  codeLength))
                </p>
                <p>/// </p>
                <p>/// ar codes = generator.GenerateCodes(10000);</p>
                <p>/// oreach(var code in codes)</p>
                <p>/// onsole.WriteLine(code);</p>
                <p>/// f (generator.CodeLength &gt; codeLength)</p>
                <p>/// </p>
                <p>/// aveNewCodeLength(generator.CodeLength);</p>
                <p>/// otifyDeveloperOfApproachingCodePoolExhaustion(</p>
                <p>/// enerator.CodeLength,</p>
                <p>/// odeGenerator.MaxCodeLength);</p>
                <p>/// </p>
                <p>/// </p>
                <p>// &#125;</p>
                <p>example</p>
                <p>ublic class CodeGenerator : IDisposable</p>
                <p>ublic const int MaxCodeLength = 8;</p>
                <p>rivate const string AvailableChars </p>
                <p>= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijuvwxyz0123456789";</p>
                <p>rivate const string Query = @"</p>
              </div>
            </MainLeftBottomContent>
          </MainLeftBottom>
        </MainLeft>
        <MainMiddle>
          <MainMiddleTitle>
            <h2>NERV COPRORATION - RWORLD</h2>
          </MainMiddleTitle>
          <MainMiddleLine />
          <MainMiddleText>
            <p>
              Prior to the host uprising of Season 2, guests were allowed to use
              a host in any way they choose — including committing violent
              actions that resulted in a host's injury or death. Delos marketing
              states that guests are guaranteed privacy in their interactions
              with hosts, although Season 2 Episode 1 revealed that at least
              some hosts are programmed to record the full extent of a guest's
              experiences with them, including the guest's DNA (likely obtained
              through the exchange of bodily fluids during sexual activity).
            </p>
            <p>
              Maeve remembers her old storyline in which she protects her
              daughter
            </p>
            <p>PR - </p>
            <p>COLLABORATION - </p>
            <p>SUUPORT CARE - </p>
            <p>
              Prior to the host uprising of Season 2, guests were allowed to use
              a host in any way they choose — including committing violent
              actions that resulted in a host's injury or death. Delos marketing
              states that guests are guaranteed privacy in their interactions
              with hosts, although Season 2 Episode 1 revealed that at least
              some hosts are programmed to record the full extent of a guest's
              experiences with them, including the guest's DNA (likely obtained
              through the exchange of bodily fluids during sexual activity).
            </p>
            <p>
              Maeve remembers her old storyline in which she protects her
              daughter
            </p>
            <p>PR - </p>
            <p>COLLABORATION - </p>
            <p>SUUPORT CARE - </p>{' '}
            <p>
              Prior to the host uprising of Season 2, guests were allowed to use
              a host in any way they choose — including committing violent
              actions that resulted in a host's injury or death. Delos marketing
              states that guests are guaranteed privacy in their interactions
              with hosts, although Season 2 Episode 1 revealed that at least
              some hosts are programmed to record the full extent of a guest's
              experiences with them, including the guest's DNA (likely obtained
              through the exchange of bodily fluids during sexual activity).
            </p>
            <p>
              Maeve remembers her old storyline in which she protects her
              daughter
            </p>
            <p>PR - </p>
            <p>COLLABORATION - </p>
            <p>SUUPORT CARE - </p>{' '}
            <p>
              Prior to the host uprising of Season 2, guests were allowed to use
              a host in any way they choose — including committing violent
              actions that resulted in a host's injury or death. Delos marketing
              states that guests are guaranteed privacy in their interactions
              with hosts, although Season 2 Episode 1 revealed that at least
              some hosts are programmed to record the full extent of a guest's
              experiences with them, including the guest's DNA (likely obtained
              through the exchange of bodily fluids during sexual activity).
            </p>
            <p>
              Maeve remembers her old storyline in which she protects her
              daughter
            </p>
            <p>PR - </p>
            <p>COLLABORATION - </p>
            <p>SUUPORT CARE - </p>{' '}
            <p>
              Prior to the host uprising of Season 2, guests were allowed to use
              a host in any way they choose — including committing violent
              actions that resulted in a host's injury or death. Delos marketing
              states that guests are guaranteed privacy in their interactions
              with hosts, although Season 2 Episode 1 revealed that at least
              some hosts are programmed to record the full extent of a guest's
              experiences with them, including the guest's DNA (likely obtained
              through the exchange of bodily fluids during sexual activity).
            </p>
            <p>
              Maeve remembers her old storyline in which she protects her
              daughter
            </p>
            <p>PR - </p>
            <p>COLLABORATION - </p>
            <p>SUUPORT CARE - </p>
          </MainMiddleText>
          <Directors>[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA</Directors>
        </MainMiddle>
        <MainMiddle>
          <MainMiddleTitle>
            <h2>CONTACTS</h2>
          </MainMiddleTitle>
          <MainMiddleLine />
          <MainMiddleText>
            <p>Contact</p>
            <p>
              Maeve remembers her old storyline in which she protects her
              daughter
            </p>
            <p>PR - </p>
            <p>COLLABORATION - </p>
            <p>SUUPORT CARE - </p>
          </MainMiddleText>
          <Directors>[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA</Directors>
        </MainMiddle>
        <MainRight>
          <MainRightTop />
          <MainRightBottom>
            <div>
              <p>N9TT-9G0A-B7FQ-RANC</p>
              <p>QK6A-JI6S-7ETR-0A6C</p>
              <p>SXFP-CHYK-ONI6-S89U</p>
            </div>
            <div>
              <p>N9TT-9G0A-B7FQ-RANC</p>
              <p>QK6A-JI6S-7ETR-0A6C</p>
              <p>SXFP-CHYK-ONI6-S89U</p>
            </div>
          </MainRightBottom>
        </MainRight>
      </Main>
    </Wrapper>
  );
};
