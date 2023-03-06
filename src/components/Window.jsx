import React from 'react';
import styled from 'styled-components';
import jacketPreview from '../assets/jacket-preview.svg';
import previewBg from '../assets/preview-bg.svg';
import video from '../assets/video/video.mp4';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 46.9rem;
  width: 100%;
  height: 100%;
`;

const WrapperTop = styled.div`
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

const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem 1.5rem 2rem 4.3rem;
`;

const WrapperContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const WrapperMainTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WrapperMainCover = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const WrapperMainLeft = styled.div`
  position: absolute;
  left: -3rem;
  top: 50%;
  transform: translateY(-50%) rotate(-180deg);
  writing-mode: vertical-lr;
  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorGray};
    width: 100%;
  }
`;

const WrapperMainMiddle = styled.div`
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  background: url(${previewBg}) 50% 0 no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51.7rem;
  width: 100%;
  /* padding: 1rem; */
`;

const WrapperMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Scan = styled.p`
  position: absolute;
  top: 1.5rem;
  right: 0.9rem;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: ${(props) => props.theme.colorMain};
  text-transform: uppercase;
`;

const Image = styled.img`
  max-height: 38vh;
  width: auto;
  max-width: 100%;
`;

const WrapperMainRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.2rem;
  width: 4.7rem;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colorMain};
  border-bottom: none;
`;

const IconArrow = styled.svg`
  position: absolute;
  right: 1.3rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.2rem;
  height: 2.1rem;
  fill: none;
  & > path {
    fill: #adadad;
    transition: all 0.2s ease;
  }
`;

const Lock = styled.svg`
  width: 1.4rem;
  height: 2.2rem;
`;

const WrapperMainBottom = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding: 1.8rem 1.5rem;
`;

const WrapperMainBottomAside = styled.div`
  position: absolute;
  left: -3rem;
  bottom: 1.5rem;
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
  & > span {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorGray};
    width: 100%;
  }
`;

const WrapperMainBottomBlock = styled.div``;

const Text = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  text-align: center;
  color: #000000;
  max-width: 30rem;
  width: 100%;
  margin: auto;
`;

const Button = styled.button`
  position: relative;
  padding: 1.4rem 0;
  cursor: pointer;
  & > span {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: #adadad;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colorBorder};
  background: transparent;
  outline: none;
  width: 100%;
  height: 4.3rem;
  padding: 0.5rem;
  margin: 1.6rem 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Window = () => {
  return (
    <Wrapper>
      <WrapperTop>Extra Window</WrapperTop>
      <WrapperMain>
        <WrapperContent>
          <WrapperMainLeft>
            <span>CLICK FOR DETAILS</span>
          </WrapperMainLeft>
          <WrapperMainBlock>
            <WrapperMainTop>
              <WrapperMainCover>
                <WrapperMainMiddle>
                  <Scan>Scn</Scan>
                  {/* <Image src={jacketPreview} alt="Nerv" /> */}
                  <Video
                    autoPlay
                    muted
                    playsInline
                    controls
                    loop
                    src={video}
                  ></Video>
                </WrapperMainMiddle>
                <WrapperMainRight>
                  <Lock viewBox="0 0 8.56 12.11">
                    <rect y="5.06" width="8.56" height="7.05" />
                    <polygon points="8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74" />
                  </Lock>
                </WrapperMainRight>
              </WrapperMainCover>
            </WrapperMainTop>
            <Button>
              <span>Preorder</span>
              <IconArrow viewBox="0 0 12 21">
                <path d="M3.5 0.75H0.689941V3.56H3.5V0.75Z" />
                <path d="M6.31006 3.56006H3.5V6.37006H6.31006V3.56006Z" />
                <path d="M9.12988 6.38H6.31982V9.19H9.12988V6.38Z" />
                <path d="M11.9398 9.18994H9.12988V11.9999H11.9398V9.18994Z" />
                <path d="M9.12988 12H6.31982V14.81H9.12988V12Z" />
                <path d="M6.31006 14.8101H3.5V17.6201H6.31006V14.8101Z" />
                <path d="M3.5 17.63H0.689941V20.44H3.5V17.63Z" />
              </IconArrow>
            </Button>
          </WrapperMainBlock>
        </WrapperContent>
        <WrapperMainBottom>
          <WrapperMainBottomAside>
            <span>EXTRA CONTENT</span>
          </WrapperMainBottomAside>
          <WrapperMainBottomBlock>
            <Text>
              ATHINA WILL SEND YOU NOTIFICATION WHEN THIS PRODUCT BECOME
              ALAILIBLE
            </Text>
            <Input type="email" placeholder="Email" />
            <Button>
              <span>I AGREE</span>
            </Button>
          </WrapperMainBottomBlock>
        </WrapperMainBottom>
      </WrapperMain>
    </Wrapper>
  );
};
