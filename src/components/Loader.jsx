import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  background: #cecece;
`;

const Icon = styled(motion.svg)`
  width: 114px;
  height: 114px;
  fill: none;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

const Bottom = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colorMain};
  width: 625px;

  &::after {
    position: absolute;
    left: 21px;
    bottom: 0;
    content: '';
    height: 11px;
    width: 1px;
    background: ${(props) => props.theme.colorMain};
  }
`;

const BottomTop = styled.div`
  background: ${(props) => props.theme.colorMain};
  height: 10px;
  width: 100%;
`;

const BottomMain = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3px;
  text-align: center;
  padding: 7px 0 6px;
  & > span {
    font-size: 14px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colorMain};
  }
`;

const Group = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;

const Dot = styled(motion.span)`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colorMain};
`;

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
};

const DotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatDelay: 1,
  ease: 'easeInOut',
};

export const Loader = () => {
  return (
    <Wrapper
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Block>
        <Icon
          animate={{
            scale: [1, 1.3, 1.3, 1, 1],
            rotate: [0, 0, 180, 180, 0],
          }}
          transition={{
            delay: .5,
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          viewBox="0 0 114 111"
        >
          <path
            d="M105.89 79.86L108.13 73.71L106.3 71.26H106.19C106.33 70.58 106.46 69.9 106.57 69.2C108.507 57.5671 105.749 45.6408 98.9 36.04C97.7397 34.3942 96.4631 32.8336 95.08 31.37L95.26 28.52L90 24.6L86.07 4L71.07 0L57.34 15.88L51.4 16.77L50.13 19.66H50.19V19.82C43.6587 21.8803 37.6892 25.4161 32.7436 30.1536C27.798 34.8911 24.009 40.7032 21.67 47.14L20.99 47.3L18.49 47.89L17 54.25L0.809998 68.56L4 83L24.58 88.48L28.12 93.34L31.03 93.15C36.2073 98.6921 42.7486 102.778 50 105L54.51 89.28L53.43 88.91C48.1543 87.0064 43.561 83.5823 40.23 79.07L35.23 76.39L32 66C33.06 64 33.68 62.83 34.67 61C34.8016 58.0903 35.3749 55.2174 36.37 52.48C38.2425 47.3241 41.5632 42.8183 45.9334 39.5031C50.3036 36.1879 55.5376 34.2043 61.0073 33.7904C66.477 33.3764 71.95 34.5498 76.7693 37.1695C81.5887 39.7893 85.5496 43.7442 88.1767 48.5595C90.8038 53.3748 91.9855 58.8459 91.58 64.3163C91.1744 69.7866 89.1988 75.0237 85.8903 79.399C82.5818 83.7742 78.0809 87.1018 72.928 88.9822C67.775 90.8626 62.1889 91.216 56.84 90L52.33 105.74C53.02 105.91 53.72 106.06 54.42 106.2C61.2753 107.569 68.3598 107.26 75.07 105.3L75.22 105.82L77.86 107.54L83.33 105.04L103.5 110.84L113.83 99.29L105.89 79.86Z"
            fill="#191919"
          />
        </Icon>
        <Bottom>
          <BottomTop />
          <BottomMain>
            <span>Connections</span>
            <Group
              variants={ContainerVariants}
              initial="initial"
              animate="animate"
            >
              <Dot variants={DotVariants} transition={DotTransition}>
                .
              </Dot>
              <Dot variants={DotVariants} transition={DotTransition}>
                .
              </Dot>
              <Dot variants={DotVariants} transition={DotTransition}>
                .
              </Dot>
            </Group>
          </BottomMain>
        </Bottom>
      </Block>
    </Wrapper>
  );
};
