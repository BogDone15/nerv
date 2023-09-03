import React from 'react';
import styled from 'styled-components';
import previewBg from '../../assets/preview-order-bg.svg';
import previewBgTab from '../../assets/preview-order-bg-tab.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/cartRedux';
import { OrderPrice } from './OrderPrice';

const ContentMainItemRemove = styled.div`
	position: absolute;
	right: 1.8rem;
	top: 1.4rem;
	z-index: 13;
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;
	& > svg {
		width: 100%;
		height: 100%;
		fill: none;
		& > path {
			stroke: ${props => props.theme.colorMain};
			transition: all 0.2s ease;
		}
	}

	&:hover {
		path {
			stroke: #fff !important;
		}
	}
`;

// const ContentPrice = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	border-top: 1px solid ${props => props.theme.colorBorder};
// 	padding: 3rem 3.3rem;
// 	width: 100%;
// 	height: 13.9rem;
// 	@media screen and (max-width: 1100px) {
// 		height: 100%;
// 	}
// `;

// const ContentPriceItem = styled.div`
// 	&:last-child {
// 		text-align: right;
// 	}
// 	& > div {
// 		font-weight: 400;
// 		font-size: 1.2rem;
// 		line-height: 1.8rem;
// 		color: ${props => props.theme.colorMain};
// 		margin-bottom: 0.2rem;
// 		&:last-child {
// 			font-weight: 600;
// 			margin-bottom: 0;
// 		}
// 	}
// `;

const Tablet = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		display: block;
		margin: 6rem 0 7rem;
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width: 567px) {
		margin: 6.3rem 0 5rem;
	}
`;

const TabletTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	padding-top: 2rem;
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
	& > a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 95%;
		margin: auto;
		text-align: center;
		background: ${props => props.theme.colorMain};
		padding-top: 0.1rem;
		height: 4.6rem;

		& > span {
			font-weight: 450;
			font-size: 1.8rem;
			line-height: 2.2rem;
			color: #adadad;
		}
		@media screen and (max-width: 1100px) {
			height: 6rem;
		}
		@media screen and (max-width: 567px) {
			& > span {
				font-size: 1.8rem;
				line-height: 2.2rem;
			}
		}
	}
`;

const TabletBottom = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
	border-top: 1px solid ${props => props.theme.colorBorder};
`;

const TabletBottomItem = styled.div`
	position: relative;
	display: flex;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	height: 33rem;
	@media screen and (max-width: 567px) {
		height: 27rem;
	}
	${ContentMainItemRemove} {
		top: 2.1rem;
		right: 5.1rem;
		@media screen and (max-width: 567px) {
			right: 3.1rem;
			width: 2rem;
			height: 2rem;
		}
	}
`;

const TabletBottomLeft = styled.div`
	background: url(${previewBg}) 50% 50% no-repeat;
	background-size: 75%;
	width: 35%;
	padding: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	& > img {
		max-width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}
	@media screen and (max-width: 1110px) {
		background: url(${previewBgTab}) 50% 50% no-repeat;
		background-size: 94%;
		padding: 3rem;
	}
`;

const TabletBottomRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-left: 1px solid ${props => props.theme.colorBorder};
	padding: 1rem 2rem 1rem 4rem;
	@media screen and (max-width: 567px) {
		padding: 1rem 2rem 1rem 2rem;
	}
`;

const ImageProduct = styled.img``;

const TabletName = styled.div`
	font-size: 2.6rem;
	line-height: 3.3rem;
	color: ${props => props.theme.colorMain};
`;
const TabletDesc = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletType = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin: 3.6rem 0 3.2rem;
	@media screen and (max-width: 567px) {
		margin: 2rem 0 1.6rem;
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletInStock = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletColor = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletSize = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletQuantity = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;

const TabletCover = styled.div`
	display: flex;
	border-top: 1px solid ${props => props.theme.colorBorder};
`;

const TabletCoverLeft = styled.div`
	position: relative;
	width: 35%;
	padding-left: 4.8rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	padding-top: 3rem;
	padding-bottom: 0.7rem;

	& > span {
		font-weight: 400;
		font-size: 1.7rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
	@media screen and (max-width: 567px) {
		padding-top: 3.3rem;
	}
`;

const TabletCoverRight = styled.div`
	width: 65%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3rem 5.2rem 0.7rem 2rem;
	& > span {
		font-weight: 400;
		font-size: 1.7rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
	@media screen and (max-width: 567px) {
		padding: 3.3rem 5.2rem 0.7rem 2rem;
	}
`;

const TabletPrice = styled.div`
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	& > div {
		width: 100%;
		border-top: unset;
		@media screen and (max-width: 567px) {
			padding: 2.3rem 4rem;
		}
	}
`;

export const OrderItemTablet = ({ setShowFirstItem }) => {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const handleDelete = (specificId, quantity, price) => {
		dispatch(deleteProduct({ specificId, quantity, price }));
		setShowFirstItem('showFirstItem');
	};
	return (
		<Tablet>
			<TabletCover>
				<TabletCoverLeft>
					<span>PREVIEW</span>
				</TabletCoverLeft>
				<TabletCoverRight>
					<span>INFO</span>
					<span>DEL</span>
				</TabletCoverRight>
			</TabletCover>
			<TabletTop>
				<Link to='/'>
					<span>COMPLETE THE SET</span>
				</Link>
				<Link to='/checkout'>
					<span>CHECKOUT</span>
				</Link>
			</TabletTop>
			<TabletBottom>
				{cart.products?.map(item => (
					<TabletBottomItem key={item.specificId}>
						<ContentMainItemRemove
							onClick={() =>
								handleDelete(item.specificId, item.quantity, item.price)
							}
						>
							<svg viewBox='0 0 15 15'>
								<path d='M1 1L14 14M14 1L1 14' strokeWidth='2' />
							</svg>
						</ContentMainItemRemove>
						<TabletBottomLeft>
							<ImageProduct src={item.imgMain} alt={item.name} />
						</TabletBottomLeft>
						<TabletBottomRight>
							<TabletName>{item.name}</TabletName>
							<TabletDesc>{item.desc}</TabletDesc>
							<TabletType>[ {item.model} ]</TabletType>
							<TabletInStock>ONLY {item.quantity} ITEM LEFT</TabletInStock>
							<TabletColor>COLOR: {item.description.color}</TabletColor>
							<TabletSize>SIZE: {item.description.sizeFull} </TabletSize>
							<TabletQuantity>QUANTITY: {item.quantity}</TabletQuantity>
						</TabletBottomRight>
					</TabletBottomItem>
				))}
			</TabletBottom>
			<TabletPrice>
				<OrderPrice />
			</TabletPrice>
		</Tablet>
	);
};
