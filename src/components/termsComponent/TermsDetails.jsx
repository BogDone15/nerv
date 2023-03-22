import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Wrapper = styled(Tabs)`
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    position: absolute;
    content: '';
    right: 1rem;
    top: 0;
    width: 1px;
    height: 100%;
    background: ${(props) => props.theme.colorBorder};
  }
  & > div {
    &.is-selected {
      height: calc(100% - 24rem);
    }
  }
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

const WrapperText = styled.div`
  padding-left: 6.4rem;
  padding-right: 7rem;
  margin-right: 0.3rem;
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
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const WrapperGroup = styled(TabPanel)``;

WrapperText.tabsRole = 'TabPanel';

const WrapperTitle = styled.div`
  padding-left: 6.4rem;

  & > h2 {
    font-weight: 600;
    font-size: 3.1rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const WrapperDirectors = styled.div`
  font-weight: 450;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colorBlack};
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};
  width: 55%;
  margin: 1.2rem 0 3.4rem 4.4rem;
  text-align: right;
  padding-right: 1rem;
`;

export const TermsDetails = () => {
  return (
    <Wrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <WrapperNav>
        <WrapperNavItem>
          <div>[01]</div>
          <div>TERMS OF CONDITIONS</div>
        </WrapperNavItem>
        <WrapperNavItem>
          <div>[02]</div>
          <div>PRIVATE POLICY</div>
        </WrapperNavItem>
        <WrapperNavItem>
          <div>[03]</div>
          <div>SHIPPING</div>
        </WrapperNavItem>
        <WrapperNavItem>
          <div>[04]</div>
          <div>RETURN</div>
        </WrapperNavItem>
      </WrapperNav>
      <WrapperGroup>
        <WrapperTitle>
          <h2>TERMS OF CONDITIONS </h2>
        </WrapperTitle>
        <WrapperDirectors>
          [ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
        </WrapperDirectors>
        <WrapperText>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.{' '}
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.Prior to the host uprising of Season 2,
            guests were allowed to use a host in any way they choose — including
            committing violent actions hat resulted in a host's injury or death.
            Delos marketing states that guests are guaranteed privacy in their
            interactions with hosts, although Season 2 Episode 1 revealed that
            at least some hosts are programmed to record the full extent of a
            guest's experiences with them, including the guest's DNA (likely
            obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death. END
          </p>
        </WrapperText>
      </WrapperGroup>
      <WrapperGroup>
        <WrapperTitle>
          <h2>PRIVATE POLICY</h2>
        </WrapperTitle>
        <WrapperDirectors>
          [ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
        </WrapperDirectors>
        <WrapperText>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.
          </p>
        </WrapperText>
      </WrapperGroup>
      <WrapperGroup>
        <WrapperTitle>
          <h2>SHIPPING</h2>
        </WrapperTitle>
        <WrapperDirectors>
          [ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
        </WrapperDirectors>
        <WrapperText>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
        </WrapperText>
      </WrapperGroup>
      <WrapperGroup>
        <WrapperTitle>
          <h2>RETURN</h2>
        </WrapperTitle>
        <WrapperDirectors>
          [ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
        </WrapperDirectors>
        <WrapperText>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death.
          </p>
          <p>
            Prior to the host uprising of Season 2, guests were allowed to use a
            host in any way they choose — including committing violent actions
            hat resulted in a host's injury or death. Delos marketing states
            that guests are guaranteed privacy in their interactions with hosts,
            although Season 2 Episode 1 revealed that at least some hosts are
            programmed to record the full extent of a guest's experiences with
            them, including the guest's DNA (likely obtained through the
            exchange of bodily fluids during sexual activity).Prior to the host
            uprising of Season 2, guests were allowed to use a host in any way
            they choose — including committing violent actions hat resulted in a
            host's injury or death. or death.Prior to the host uprising of
            Season 2, guests were allowed to use a host in any way they choose —
            including committing violent actions hat resulted in a host's injury
            or death. Delos marketing states that guests are guaranteed privacy
            in their interactions with hosts, although Season 2 Episode 1
            revealed that at least some hosts are programmed to record the full
            extent of a guest's experiences with them, including the guest's DNA
            (likely obtained through the exchange of bodily fluids during sexual
            activity).Prior to the host uprising of Season 2, guests were
            allowed to use a host in any way they choose — including committing
            violent actions hat resulted in a host's injury or death.
          </p>
        </WrapperText>
      </WrapperGroup>
    </Wrapper>
  );
};
