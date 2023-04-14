import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import loader from '../../assets/loader.svg';
import failureBg from '../../assets/error-bg.jpg';
import loaderText from '../../assets/loader-text.svg';
import { Status } from '../Status';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	width: 93%;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${failureBg}) 50% 0 no-repeat;
`;

const Cover = styled.div`
	display: flex;
	align-items: center;
`;

const Image = styled(motion.img)`
	width: 11.5rem;
	height: 11.5rem;
`;

const ImageText = styled.img`
	max-width: 35.2rem;
	width: 100%;
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		margin-top: 34.3rem;
	}
`;

const Bottom = styled.div`
	position: relative;
	border: 1px solid ${props => props.theme.colorMain};
	width: 62.5rem;

	&::before {
		position: absolute;
		left: 2.1rem;
		bottom: 0;
		content: '';
		height: 1.1rem;
		width: 1px;
		background: ${props => props.theme.colorMain};
	}
	&::after {
		position: absolute;
		right: 2.1rem;
		bottom: 0;
		content: '';
		height: 1.1rem;
		width: 1px;
		background: ${props => props.theme.colorMain};
	}
`;

const BottomTop = styled.div`
	background: ${props => props.theme.colorMain};
	height: 1rem;
	width: 100%;
`;

const BottomMain = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3px;
	text-align: center;
	padding: 2px 0 1px;
	& > span {
		font-size: 8px;
		text-transform: uppercase;
		color: ${props => props.theme.colorMain};
	}
`;

const Text = styled.div`
	text-align: center;
	margin-top: 3rem;
	& > p {
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		font-size: ${props => props.theme.fontsm};
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
	font-size: 11px;
	color: ${props => props.theme.colorMain};
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

export const FailureDetails = () => {
	return (
		<Wrapper>
			<Status color='#FF0000' status='OFFLINE' />
			<Content>
				<Block>
					<Cover>
						<Image
							src={loader}
							alt='Nerv'
							animate={{ rotate: 360 }}
							transition={{ ease: 'linear', duration: 6, repeat: Infinity }}
						/>
						<ImageText src={loaderText} alt='Nerv' />
					</Cover>
					<Bottom>
						<BottomTop />
						<BottomMain>
							<span>System reboot</span>
							<Group
								variants={ContainerVariants}
								initial='initial'
								animate='animate'
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
					<Text>
						<p>
							Our corporation has been under cyber attack. Athina is busy
							troubleshooting.
						</p>
						<p>
							We will be operating at full capacity soon. Keep for updates &gt;
						</p>
					</Text>
				</Block>
			</Content>
		</Wrapper>
	);
};
