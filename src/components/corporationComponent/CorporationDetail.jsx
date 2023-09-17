import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import planet from '../../assets/planet.png';
import { ContactsCategory } from './ContactsCategory';

const Wrapper = styled.div`
	padding: 0 1.5rem 1.9rem 2rem;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		display: flex;
		align-items: flex-start;
		gap: 4.1rem;
		padding-left: 0;
		padding-right: 4.3rem;
	}
`;

const Main = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	width: 100%;
	height: calc(100% - 12.1rem);
	@media screen and (max-width: 1100px) {
		flex-direction: column;
		height: 100%;
	}
`;

const MainLeft = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 29rem;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		max-width: 100%;
		height: auto;
		gap: 0;
	}
`;

const MainLeftTop = styled.div`
	border: 1px solid ${props => props.theme.colorBorder};
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 29rem;
	@media screen and (max-width: 1100px) {
		height: 64.3rem;
		padding: 3.7rem 5rem;
	}
`;

const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
`;

const MainLeftBottom = styled.div`
	border: 1px solid ${props => props.theme.colorBorder};
	height: 100%;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Decoration = styled.div`
	height: 1.4rem;
	width: 100%;
	background: ${props => props.theme.colorBlack};
`;

const MainLeftBottomContent = styled.div`
	padding: 2rem 1rem 0 2.7rem;
	color: ${props => props.theme.colorBlack};

	& > div {
		margin-bottom: 0.6rem;
		&:last-child {
			margin-bottom: 0;
		}
		& > p {
			font-weight: 400;
			font-size: 5.48px;
			line-height: 7px;
		}
	}
`;

const MainRight = styled.div`
	max-width: 10.3rem;
	width: 100%;
	height: 100%;
	border: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const MainRightTop = styled.div`
	height: 50%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
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
		<Wrapper>
			<Main>
				<MainLeft>
					<MainLeftTop>
						<Image src={planet} alt='Nerv' />
					</MainLeftTop>
					<MainLeftBottom>
						<Decoration />
						<MainLeftBottomContent>
							<TypeAnimation
								style={{
									whiteSpace: 'pre-line',
									display: 'block',
									fontWeight: 400,
									fontSize: '5.48px',
									lineHeight: '7px',
								}}
								sequence={[
									`
				using System;
				using System.Collections.Generic;
				using System.Data;
				using System.Data.SqlClient;
				using System.Linq;
				using System.Text;
				using Microsoft.SqlServer.Server;
				
				namespace CodeGenerator
				{
				// <summary>
				// <summary>
				// <summary>
				// <code>
				// using (var connection = new SqlConnection(ConnectionString))
				// {
				/// onnection.Open();
				/// ar codeLength = GetCurrentCodeLength(connection);
				/// sing (var generator = new CodeGenerator(connection, codeLength))
				///
				/// ar codes = generator.GenerateCodes(10000);
				/// oreach(var code in codes)
				/// onsole.WriteLine(code);
				/// f (generator.CodeLength > codeLength)
				///
				/// aveNewCodeLength(generator.CodeLength);
				/// otifyDeveloperOfApproachingCodePoolExhaustion(
				/// enerator.CodeLength,
				/// odeGenerator.MaxCodeLength);
				///
				///
				// }
				example
				ublic class CodeGenerator : IDisposable
				ublic const int MaxCodeLength = 8;
				rivate const string AvailableChars
				= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijuvwxyz0123456789";
				rivate const string Query = @"
`,
									10000000,
									'',
								]}
								speed={100}
								cursor={false}
								repeat={0}
							/>
						</MainLeftBottomContent>
					</MainLeftBottom>
				</MainLeft>
				<ContactsCategory />
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
