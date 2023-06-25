import React from 'react';
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
		border-top: 1px solid ${props => props.theme.colorBorder};
		margin-top: rem;
		padding-top: 4.6rem;
		padding-left: 0;
		padding-right: 4.3rem;
		margin-top: 6.3rem;
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

	& > div {
		margin-bottom: 0.6rem;
		&:last-child {
			margin-bottom: 0;
		}
		& > p {
			font-weight: 400;
			font-size: 5.48px;
			line-height: 7px;
			color: ${props => props.theme.colorBlack};
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
							<div>
								<p>using System;</p>
								<p>using System.Collections.Generic;</p>
								<p>using System.Data;</p>
								<p>using System.Data.SqlClient;</p>
								<p>using System.Linq;</p>
								<p>using System.Text;</p>
								<p>using Microsoft.SqlServer.Server;</p>
							</div>
							<div>
								<p>namespace CodeGenerator</p>
								<p> &#123;</p>
								<p>// &lt;summary&gt;</p>
								<p>// &lt;summary&gt;</p>
								<p>// &lt;summary&gt;</p>
								<p>// &lt;code&gt;</p>
								<p>
									// using (var connection = new
									SqlConnection(ConnectionString))
								</p>
								<p>// &#123;</p>
								<p>/// onnection.Open();</p>
								<p>/// ar codeLength = GetCurrentCodeLength(connection);</p>
								<p>
									/// sing (var generator = new CodeGenerator(connection,
									codeLength))
								</p>
								<p>/// </p>
								<p>/// ar codes = generator.GenerateCodes(10000);</p>
								<p>/// oreach(var code in codes)</p>
								<p>/// onsole.WriteLine(code);</p>
								<p>/// f (generator.CodeLength &gt; codeLength)</p>
								<p>/// </p>
								<p>/// aveNewCodeLength(generator.CodeLength);</p>
								<p>/// otifyDeveloperOfApproachingCodePoolExhaustion(</p>
								<p>/// enerator.CodeLength,</p>
								<p>/// odeGenerator.MaxCodeLength);</p>
								<p>/// </p>
								<p>/// </p>
								<p>// &#125;</p>
								<p>example</p>
								<p>ublic class CodeGenerator : IDisposable</p>
								<p>ublic const int MaxCodeLength = 8;</p>
								<p>rivate const string AvailableChars </p>
								<p>= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijuvwxyz0123456789";</p>
								<p>rivate const string Query = @"</p>
							</div>
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
