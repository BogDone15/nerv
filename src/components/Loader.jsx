import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

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
`

const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Bottom = styled.div`
	position: relative;
	border: 1px solid ${props => props.theme.colorMain};
	width: 625px;

	&::after {
		position: absolute;
		left: 21px;
		bottom: 0;
		content: "";
		height: 11px;
		width: 1px;
		background: ${props => props.theme.colorMain};
	}
`

const BottomTop = styled.div`
	background: ${props => props.theme.colorMain};
	height: 10px;
	width: 100%;
`

const BottomMain = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3px;
	text-align: center;
	padding: 2px 0 1px;
	& > span {
		font-size: 10px;
		text-transform: uppercase;
		color: ${props => props.theme.colorMain};
	}
`

const Group = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1px;
`

const Dot = styled(motion.span)`
	text-transform: uppercase;
	font-size: 11px;
	color: ${props => props.theme.colorMain};
`

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
}

const DotVariants = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
	},
}

const DotTransition = {
	duration: 0.5,
	repeat: Infinity,
	repeatDelay: 1,
	ease: "easeInOut",
}

const ImageWrapper = styled(motion.div)`
	width: 115px;
	height: 115px;
`

const Icon = styled.svg`
	width: 100%;
	height: 100%;
	fill: none;
	& > path {
		fill: ${props => props.theme.colorMain};
	}
`

export const Loader = () => {
	return (
		<Wrapper
			initial={{ y: 0, opacity: 1 }}
			exit={{ y: "100%", opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<Block>
				<ImageWrapper
					animate={{
						scale: [1, 1.3, 1.3, 1, 1],
						rotate: [0, 0, 180, 180, 0],
					}}
					transition={{
						delay: 0.5,
						duration: 2,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.8, 1],
					}}
				>
					<Icon viewBox='0 0 159 159'>
						<path d='M50.9915 99.6777L54.0457 103.646L56.291 103.417C60.3144 107.264 65.2354 110.044 70.6068 111.505C75.9781 112.965 81.6294 113.061 87.0469 111.781L89.099 113.265L93.7097 111.324L108.607 116.734L116.849 108.397L111.479 93.3376L113.367 88.7051L111.833 86.6364C113.017 81.3539 112.898 75.8627 111.486 70.6365C110.075 65.4102 107.413 60.6058 103.731 56.6374L104.017 54.0069L100.034 50.9303L97.3876 35.3206L86.0627 32.2791L75.6363 44.3972L70.6698 45.0582L69.6077 47.4935C64.6485 49.0181 60.1092 51.6691 56.3447 55.2394L65.0554 63.8514C68.7904 60.39 73.6523 58.3977 78.7422 58.243C83.8322 58.0883 88.8061 59.7816 92.7444 63.0099C96.6826 66.2381 99.319 70.783 100.166 75.8044C101.013 80.8258 100.014 85.984 97.3525 90.3256L97.3548 93.1136L92.9815 97.537L89.9501 97.5543C85.6403 100.124 80.5545 101.07 75.6091 100.221C70.6638 99.373 66.1839 96.7863 62.9769 92.9273C59.7699 89.0684 58.0465 84.1909 58.1174 79.1738C58.1882 74.1567 60.0486 69.3298 63.3633 65.5629L54.6458 56.9442C51.4432 60.4682 49.0398 64.6426 47.6001 69.1817L45.1128 70.2819L44.4474 75.2425L32.323 85.6616L35.3514 96.9857L50.9915 99.6777Z' />
					</Icon>
				</ImageWrapper>

				<Bottom>
					<BottomTop />
					<BottomMain>
						<span>Connections</span>
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
			</Block>
		</Wrapper>
	)
}
