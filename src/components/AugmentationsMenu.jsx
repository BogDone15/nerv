import React from 'react';
import styled from 'styled-components';
import itemFirst from '../assets/items/item1.svg';
import itemSecond from '../assets/items/item2.svg';
import augmenBgFirst from '../assets/augmen-bg1.png';
import augmenBgSecond from '../assets/augmen-bg2.png';
import augmenBgThird from '../assets/augmen-bg3.png';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 14.8rem;
  width: 100%;
  height: 100%;
`;

const MenuTop = styled.div`
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

const MenuMain = styled.div`
  height: calc(100% - 7.8rem);
  padding: 1.7rem 1rem 1rem;
`;

const MenuMainView = styled.div`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const MenuItems = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.active ? '1' : '0.5')};
`;

const MenuItemsAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  margin-right: 0.2rem;
  transition: all 0.2s ease;

  & > span {
    transform: rotate(-180deg);
    writing-mode: vertical-lr;
    color: ${(props) => props.theme.colorMain};
    font-size: 6px;
    text-transform: uppercase;
  }
`;

const Icon = styled.svg`
  width: 6px;
  height: 7px;
  fill: none;
`;

const MenuItemsContent = styled.div`
  position: relative;
  background-image: url(${augmenBgFirst});
  background-size: 11.1rem 4.7rem;
  background-repeat: no-repeat;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.1rem;
  height: 4.7rem;
`;

const MenuItemsContentSecond = styled.div`
  position: relative;
  background-image: url(${augmenBgSecond});
  background-size: 4.8rem 9.8rem;
  background-repeat: no-repeat;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 9.8rem;
`;

const MenuItemsContentLast = styled.div`
  position: relative;
  background-image: url(${augmenBgThird});
  background-size: 5.5rem 4.7rem;
  background-repeat: no-repeat;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 4.7rem;
  opacity: 0.5;
  pointer-events: none;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 4vh;
  width: auto;
`;

const MenuAsideLine = styled.div`
  position: absolute;
  left: -0.4rem;
  top: 0%;
  content: '';
  width: 0.8rem;
  height: 100%;
  background: ${(props) => props.theme.colorMain};
  transition: all 0.2s ease;
  opacity: 0;
`;

const GearLine = styled.div`
  position: absolute;
  left: 3px;
  top: -1.2px;
  background: ${(props) => props.theme.colorMain};
  height: 3px;
  max-width: 2.8rem;
  width: 100%;
  transition: all 0.2s ease;
`;

const Lock = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1.2rem;
  height: 1.7rem;
  & > rect {
    transform: translateY(5px);
    width: 1.2rem;
    height: 1.7rem;
  }
`;

const MenuCover = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  margin-top: 1.1rem;
`;

const MenuGroup = styled.div`
  position: relative;
  pointer-events: ${(props) => (props.lock ? 'none' : 'auto')};
  cursor: pointer;
  &:hover ${MenuItems} {
    opacity: 1;
  }
  &:hover ${GearLine} {
    opacity: 0;
  }
  &:hover ${MenuAsideLine} {
    opacity: 1;
  }
  &:hover ${MenuItemsAside} {
    transform: translateX(-0.4rem);
  }
`;

const MenuCoverLeft = styled.div``;

const MenuCoverRight = styled.div``;

const Text = styled.p`
  font-weight: 700;
  font-size: 0.5rem;
  letter-spacing: 0.18px;
  color: ${(props) => props.theme.colorMain};
  text-transform: uppercase;
`;

export const AugmentationsMenu = () => {
  return (
    <Menu>
      <MenuTop>
        AUGMENTATIONS <br />
        MENU
      </MenuTop>
      <MenuMain>
        <MenuMainView>VIEW ALL GEAR</MenuMainView>
        <MenuGroup lock="true">
          <Lock viewBox="0 0 8.56 12.11">
            <rect />
            <polygon points="8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74" />
          </Lock>
          <MenuItems>
            <MenuItemsAside>
              <Icon viewBox="0 0 3 4">
                <path
                  d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                  fill="#191919"
                />
              </Icon>
              <span>items</span>
            </MenuItemsAside>
            <MenuItemsContent>
              <MenuAsideLine />
              <GearLine />
              <Image src={itemFirst} alt="nerv" />
            </MenuItemsContent>
          </MenuItems>
        </MenuGroup>
        <MenuCover>
          <MenuCoverLeft>
            <MenuGroup>
              <MenuItems>
                <MenuItemsAside>
                  <Icon viewBox="0 0 3 4">
                    <path
                      d="M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z"
                      fill="#191919"
                    />
                  </Icon>
                  <span>spec armr</span>
                </MenuItemsAside>
                <MenuItemsContentSecond>
                  <MenuAsideLine />
                  <GearLine />
                  <Image src={itemSecond} alt="nerv" />
                </MenuItemsContentSecond>
              </MenuItems>
            </MenuGroup>
          </MenuCoverLeft>
          <MenuCoverRight>
            <MenuItemsContentLast>
              <GearLine />
              <Text>&gt; Classified &lt;</Text>
            </MenuItemsContentLast>
          </MenuCoverRight>
        </MenuCover>
      </MenuMain>
    </Menu>
  );
};
