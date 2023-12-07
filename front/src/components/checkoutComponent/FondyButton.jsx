import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

import api from '../../services/apiCalls.service';

const style = {
	layout: 'vertical',
	color: 'black',
	height: 46,
};

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner, cartData, orderId }) => {
	const [{ isPending }] = usePayPalScriptReducer();
	const navigate = useNavigate();

	async function createOrder(data, actions) {
		return actions.order.create({
			purchase_units: [{ amount: { value: cartData.cart.total.toFixed(2) } }],
			custom_id: orderId,
		});
	}

	async function onApprove(data) {
		const success = await api.captureOrder(orderId, data);

		setTimeout(() => {
			navigate('/order-granted');
		}, 1e3);

		return success;
	}

	return (
		<>
			{((showSpinner && isPending) || !orderId) && <div className='spinner' />}
			<PayPalButtons
				style={style}
				disabled={false}
				forceReRender={[style]}
				fundingSource={'paypal'}
				createOrder={createOrder}
				onApprove={onApprove}
			/>
		</>
	);
};

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4.6rem;
	cursor: pointer;
	border: 1px solid transparent;
	transition: all 0.2s ease;

	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		transition: all 0.2s ease;
	}
	&:hover {
		background: transparent;
		border: 1px solid ${props => props.theme.colorMain};
		& > span {
			color: ${props => props.theme.colorMain};
		}
	}
	@media screen and (max-width: 1100px) {
		height: 6rem;
		& > span {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
`;

function FondyPaymentButton({ cartData }) {
	const [button, setButton] = useState(null);
	const [orderId, setOrderId] = useState(null);

	useEffect(() => {
		const loadButton = async () => {
			const savingResult = await api.saveShoppingCart(cartData);

			if (savingResult.error) {
				alert('Oh no, some shit happend');
				return;
			}

			setOrderId(savingResult.orderId);

			// Load the ipsp.js script dynamically
			const script = document.createElement('script');
			script.src = 'https://pay.fondy.eu/static_common/v1/checkout/ipsp.js';
			script.async = true;
			script.onload = () => {
				// Initialize the Fondy button when the script is loaded
				const loadedButton = window.$ipsp.get('button');
				loadedButton.setMerchantId(1534494);
				loadedButton.setAmount(cartData.cart.total, 'USD', true);
				loadedButton.addField({
					label: 'Order #',
					name: 'orderId',
					value: savingResult.orderId,
					readonly: true,
				});
				loadedButton.setHost('pay.fondy.eu');
				setButton(loadedButton);
			};
			document.body.appendChild(script);
		};

		loadButton();
	}, [cartData]);

	const handlePayButtonClick = event => {
		event.preventDefault();
		if (button) {
			window.location.href = button.getUrl();
		}
	};

	return (
		<React.Fragment>
			<Button onClick={handlePayButtonClick}>
				<span>PAY VIA FONDY </span>
			</Button>

			<div style={{ height: '10px' }}></div>

			<div style={{ maxWidth: '750px', width: '100%', margin: 'auto' }}>
				<PayPalScriptProvider
					options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}
				>
					<ButtonWrapper
						cartData={cartData}
						orderId={orderId}
						showSpinner={false}
					/>
				</PayPalScriptProvider>
			</div>
		</React.Fragment>
	);
}

export default FondyPaymentButton;
