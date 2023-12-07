import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import previewBg from '../../assets/preview-bg.svg';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import apiCallsService from '../../services/apiCalls.service';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 46.9rem;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const WrapperMain = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 1.6rem;
	padding: 2rem 1.5rem 2rem 4.3rem;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
`;

const WrapperContent = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`;
const WrapperMainTop = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	&:after {
		position: absolute;
		left: -0.4rem;
		top: 50%;
		transform: translateY(-50%);
		content: '';
		width: 0.4rem;
		height: 47%;
		background: ${props => props.theme.colorMain};
		clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 99%);
	}
`;

const WrapperMainCover = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const WrapperMainLeft = styled.div`
	position: absolute;
	left: -3rem;
	bottom: 0;
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorGray};
		width: 100%;
	}
`;

const WrapperMainMiddle = styled.div`
	position: relative;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	border-left: 1px solid rgba(0, 0, 0, 0.3);
	background: url(${previewBg}) 50% 50%;
	background-size: contain;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 4rem 1rem;
`;

const Scan = styled.p`
	position: absolute;
	top: 1.5rem;
	right: 0.9rem;
	font-weight: 700;
	font-size: 1.3rem;
	line-height: 1.6rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
`;

const IconArrow = styled.svg`
	position: absolute;
	right: 1.3rem;
	top: 50%;
	transform: translateY(-50%);
	width: 1.2rem;
	height: 2.1rem;
	fill: none;
	transition: all 0.2s ease;

	& > path {
		fill: #adadad;
		transition: all 0.2s ease;
	}
`;

const IconArrowHide = styled.svg`
	position: absolute;
	right: 5.3rem;
	top: 50%;
	transform: translateY(-50%);
	width: 1.2rem;
	height: 2.1rem;
	fill: none;
	opacity: 0;
	transition: all 0.2s ease;

	& > path {
		fill: #adadad;
		transition: all 0.2s ease;
	}
`;

const WrapperMainBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	& > a {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 5.7rem 1.3rem 1.6rem;
		height: 4.6rem;
		background: ${props => props.theme.colorMain};
		border: 1px solid transparent;
		cursor: pointer;
		transition: all 0.2s ease;
		overflow: hidden;
		& > span {
			font-weight: 450;
			font-size: ${props => props.theme.fontsm};
			line-height: 1.8rem;
			color: #adadad;
			text-transform: uppercase;
			transition: all 0.2s ease;
		}

		&:hover {
			background: transparent;
			border: 1px solid ${props => props.theme.colorMain};
			& > span {
				color: ${props => props.theme.colorMain};
			}
			${IconArrowHide} {
				transform: translate(4.2rem, -50%);
				opacity: 1;
				fill: ${props => props.theme.colorMain};
				& > path {
					fill: ${props => props.theme.colorMain};
				}
			}
			${IconArrow} {
				transform: translate(5rem, -50%);
				fill: ${props => props.theme.colorMain};
				& > path {
					fill: ${props => props.theme.colorMain};
				}
			}
		}
	}
`;

const EmptyButton = styled.div`
	position: relative;
	padding: 1.4rem 0 1.3rem;
	height: 4.6rem;
	background: ${props => props.theme.colorMain};
	text-align: center;
	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		text-transform: uppercase;
	}
`;

const Button = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.4rem 0 1.3rem;
	margin-top: 1.6rem;
	height: 4.6rem;
	cursor: pointer;
	user-select: none;
	transition: all 0.2s ease;
	& > span {
		font-weight: 450;
		font-size: 1.4rem;
		line-height: 1.8rem;
		color: #adadad;
		text-transform: uppercase;
		transition: all 0.2s ease;
	}
	&:hover {
		background: transparent;
		border: 1px solid ${props => props.theme.colorMain};
		& > span {
			color: ${props => props.theme.colorMain};
		}
	}
`;

const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-position: center;
	object-fit: contain;
`;

const WrapperMainRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.2rem;
	width: 4.7rem;
	height: 100%;
	border: 1px solid ${props => props.theme.colorMain};
	border-bottom: none;
`;

const Lock = styled.svg`
	width: 1.4rem;
	height: 2.2rem;
`;

const WrapperMainBottom = styled.div`
	position: relative;
	border: 1px solid ${props => props.theme.colorMain};
	padding: 0.4rem 1.5rem;
	min-height: 17rem;
`;

const WrapperMainBottomAside = styled.div`
	position: absolute;
	left: -3rem;
	bottom: 1rem;
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorGray};
		width: 100%;
	}
`;

const WrapperMainBottomBlock = styled.div`
	height: 100%;
	width: 100%;
	padding-top: 1rem;
`;

const Text = styled.p`
	font-weight: 300;
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-align: center;
	color: #000000;
	max-width: 30rem;
	width: 100%;
	margin: auto;
`;

const Input = styled.input`
	border: 1px solid ${props => props.theme.colorBorder};
	background: transparent;
	outline: none;
	width: 100%;
	height: 4.3rem;
	margin: 1.6rem 0 0;
`;

const InputWrapper = styled.form`
	position: relative;
	width: 100%;
	height: 100%;
	/* margin: 1.3rem 0; */
`;

const InputPlaceHolder = styled.span`
	position: absolute;
	background: #cecece;
	padding: 0 0.8rem;
	left: 2rem;
	top: 2.6rem;
	font-weight: 300;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: #000000;
	text-transform: uppercase;
	transition: all 0.2s ease;
	& + p {
		position: absolute;
		left: 0;
		bottom: 5.7rem;
	}
`;

const Plus = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	& > span {
		width: 3rem;
		height: 1px;
		background: ${props => props.theme.colorMain};
		transform: translateX(1.5rem);

		&:last-child {
			transform: translateX(-1.4rem) rotate(90deg);
		}
	}
`;

const Unlock = styled.svg`
	width: 2.4rem;
	height: 2rem;
	fill: none;
	& > path {
		fill: ${props => props.theme.colorMain};
	}
`;

const ErrorBlock = styled.div`
	font-weight: 450;
	font-size: 1.6rem;
	line-height: 1.7rem;
	color: ${props => props.theme.colorMain};
	margin: auto;
	text-align: center;
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
	width: 100%;
`;

const SuccessBlock = styled.div`
	font-weight: 450;
	font-size: 1.6rem;
	line-height: 1.7rem;
	color: ${props => props.theme.colorMain};
	margin: auto;
	text-align: center;
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
`;

export const Window = ({ activeitem }) => {
	const [currentItem, setCurrentItem] = useState([]);
	const [errorBlock, setErrorBlock] = useState(false);
	const [successBlock, setSuccessBlock] = useState(false);
	const [inputBlock, setInputBlock] = useState(true);
	const [path, setPath] = useState('');

	const data = useSelector(state => state.data);

	useEffect(() => {
		const result = data?.find(item => item._id === activeitem);
		if (result) {
			setCurrentItem(result);
			setPath(result.name.replace(/ /gi, '-').toLowerCase());
		}
	}, [activeitem, currentItem.name, data]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = async data => {
		setErrorBlock(false);
		setSuccessBlock(false);

		const response = await apiCallsService.subscribeRequest(data);

		if (response.error) {
			setInputBlock(false);
			setErrorBlock(true);
			return;
		}

		setInputBlock(false);
		setSuccessBlock(true);
		reset();
	};

	return (
		<Wrapper>
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
									<Image src={currentItem.imgMain} alt='Nerv' />
								</WrapperMainMiddle>
								<WrapperMainRight>
									{currentItem.availability?.toLowerCase() === 'new' ||
									currentItem.availability === '' ? (
										<Unlock viewBox='0 0 25 21'>
											<path d='M14.17 8.48999H0.449951V20.18H14.17V8.48999Z' />
											<path d='M24.6899 6.29996H21.65V3.14996H13.77V6.29996H10.72V0.0999756H24.6899V6.29996Z' />
										</Unlock>
									) : (
										<Lock viewBox='0 0 8.56 12.11'>
											<rect y='5.06' width='8.56' height='7.05' />
											<polygon points='8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74' />
										</Lock>
									)}
								</WrapperMainRight>
							</WrapperMainCover>
						</WrapperMainTop>
						{currentItem.availability?.toLowerCase() === 'new' ||
						currentItem.availability === '' ? (
							<Link to={`/interface/${path}`}>
								<span>{currentItem.name}</span>
								<span>{currentItem.price}.00 USD</span>
								<IconArrowHide viewBox='0 0 12 21'>
									<path d='M3.5 0.75H0.689941V3.56H3.5V0.75Z' />
									<path d='M6.31006 3.56006H3.5V6.37006H6.31006V3.56006Z' />
									<path d='M9.12988 6.38H6.31982V9.19H9.12988V6.38Z' />
									<path d='M11.9398 9.18994H9.12988V11.9999H11.9398V9.18994Z' />
									<path d='M9.12988 12H6.31982V14.81H9.12988V12Z' />
									<path d='M6.31006 14.8101H3.5V17.6201H6.31006V14.8101Z' />
									<path d='M3.5 17.63H0.689941V20.44H3.5V17.63Z' />
								</IconArrowHide>
								<IconArrow viewBox='0 0 12 21'>
									<path d='M3.5 0.75H0.689941V3.56H3.5V0.75Z' />
									<path d='M6.31006 3.56006H3.5V6.37006H6.31006V3.56006Z' />
									<path d='M9.12988 6.38H6.31982V9.19H9.12988V6.38Z' />
									<path d='M11.9398 9.18994H9.12988V11.9999H11.9398V9.18994Z' />
									<path d='M9.12988 12H6.31982V14.81H9.12988V12Z' />
									<path d='M6.31006 14.8101H3.5V17.6201H6.31006V14.8101Z' />
									<path d='M3.5 17.63H0.689941V20.44H3.5V17.63Z' />
								</IconArrow>
							</Link>
						) : (
							<EmptyButton>
								<span>
									{currentItem.availability === ''
										? currentItem.name
										: currentItem.availability}
								</span>
							</EmptyButton>
						)}
					</WrapperMainBlock>
				</WrapperContent>
				<WrapperMainBottom>
					<WrapperMainBottomAside>
						<span>EXTRA CONTENT</span>
					</WrapperMainBottomAside>
					<WrapperMainBottomBlock>
						{currentItem.availability?.toLowerCase() === 'new' ||
						currentItem.availability === '' ? (
							<Plus>
								<span></span>
								<span></span>
							</Plus>
						) : (
							<>
								<InputWrapper onSubmit={handleSubmit(onSubmit)}>
									{errorBlock && (
										<ErrorBlock>Something went wrong. Try again.</ErrorBlock>
									)}
									{successBlock && <SuccessBlock>You subscribed.</SuccessBlock>}
									{inputBlock && (
										<>
											<Text>NOTIFY ME</Text>
											<Input
												type='email'
												name='email'
												{...register('email', {
													required: 'enter valid email adress',
													pattern: {
														value:
															/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
														message:
															'Entered value does not match email format',
													},
												})}
											/>
											<InputPlaceHolder error={errors.email?.message}>
												Email
											</InputPlaceHolder>
											<p style={{ color: 'red' }}>{errors.email?.message}</p>
											<Button type='submit'>
												<span>I AGREE</span>
											</Button>
										</>
									)}
								</InputWrapper>
							</>
						)}
					</WrapperMainBottomBlock>
				</WrapperMainBottom>
			</WrapperMain>
		</Wrapper>
	);
};
