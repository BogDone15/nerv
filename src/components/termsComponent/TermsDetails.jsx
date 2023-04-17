import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Wrapper = styled(Tabs)`
	position: relative;
	width: 100%;
	height: 100%;
	&:after {
		position: absolute;
		content: '';
		right: 1rem;
		top: 0;
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBorder};
	}
	& > div {
		&.is-selected {
			height: calc(100% - 24rem);
		}
	}
	@media screen and (max-width: 1100px) {
		display: flex;
		align-items: flex-start;
		gap: 4.4rem;
		margin-top: 4.5rem;
		padding-top: 3.7rem;
		border-top: 1px solid ${props => props.theme.colorBorder};
		& > div {
			padding-right: 4rem;
			padding-bottom: 2rem;
			&:not(.is-selected) {
				display: none;
			}
			&.is-selected {
				height: 100%;
			}
		}
		&:after {
			display: none;
		}
	}
	@media screen and (max-width: 567px) {
		margin-top: 6.3rem;
	}
`;

const WrapperNav = styled(TabList)`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding-left: 6.2rem;
	padding-top: 4.8rem;
	margin-bottom: 4.8rem;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: flex-start;
		padding-left: 3.5rem;
		padding-top: 0;
		margin-bottom: 0;
	}
	@media screen and (max-width: 567px) {
		padding-left: 2.3rem;
	}
`;

WrapperNav.tabsRole = 'TabList';

const WrapperNavItem = styled(Tab)`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	cursor: pointer;

	& > div {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorMain};
		border: 1px solid #898989;
		padding: 0.3rem 8rem 0.2rem 1.3rem;
		transition: all 0.2s ease;
		&:first-child {
			padding: 0.3rem 0.2rem 0.2rem 0.2rem;
		}
	}

	&:hover {
		& > div {
			background: ${props => props.theme.colorMain};
			color: #b2b2b2;
		}
	}

	&.is-selected {
		& > div {
			border: 1px solid transparent;
			background: ${props => props.theme.colorMain};
			color: #b2b2b2;
			&:last-child {
				padding-right: 20rem;
			}
		}
	}
	@media screen and (max-width: 1100px) {
		align-items: flex-start;
		writing-mode: vertical-lr;
		& > div {
			padding: 0.3rem 0.2rem 0.2rem 0.2rem;
			&:last-child {
				padding-bottom: 1.8rem;
			}
		}
		&.is-selected {
			& > div {
				&:last-child {
					padding: 0.3rem 0.2rem 3.8rem 0.2rem;
				}
			}
		}
	}
	@media screen and (max-width: 567px) {
		& > div {
			font-size: 1.7rem;
			&:first-child {
				padding: 0.6rem 0.7rem 0.5rem 0.4rem;
			}
			&:last-child {
				padding: 0.6rem 0.7rem 4.1rem 0.4rem;
			}
		}
		&.is-selected {
			& > div {
				border: 1px solid transparent;
				&:first-child {
					padding: 0.6rem 0.7rem 0.5rem 0.4rem;
				}
				&:last-child {
					padding: 0.6rem 0.7rem 4.1rem 0.4rem;
				}
			}
		}
	}
`;

WrapperNavItem.tabsRole = 'Tab';

const WrapperText = styled.div`
	padding-left: 6.2rem;
	padding-right: 7rem;
	margin-right: 0.3rem;
	height: 100%;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	& > p {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		margin-bottom: 1.2rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 1100px) {
		overflow-y: visible;
		padding-left: 0;
		padding-right: 0;
		margin-right: 0;
		width: 100%;
		& > p {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
`;

const WrapperGroup = styled(TabPanel)``;

WrapperText.tabsRole = 'TabPanel';

const WrapperTitle = styled.div`
	padding-left: 6.4rem;

	& > h2 {
		font-weight: 600;
		font-size: 3.1rem;
		color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		padding-left: 0;
	}
`;

const WrapperDirectors = styled.div`
	font-weight: 450;
	font-size: 1.2rem;
	color: ${props => props.theme.colorBlack};
	border-bottom: 1px solid ${props => props.theme.colorBlack};
	width: 55%;
	margin: 1.2rem 0 3.4rem 4.4rem;
	text-align: right;
	padding-right: 1rem;
	@media screen and (max-width: 1100px) {
		width: 95%;
		padding-right: 0;
		padding-left: 1rem;
		text-align: left;
		font-size: ${props => props.theme.fontnm};
	}
`;

export const TermsDetails = () => {
	return (
		<Wrapper
			selectedTabClassName='is-selected'
			selectedTabPanelClassName='is-selected'
		>
			<WrapperNav>
				<WrapperNavItem>
					<div>[01]</div>
					<div>TERMS OF CONDITIONS</div>
				</WrapperNavItem>
				<WrapperNavItem>
					<div>[02]</div>
					<div>PRIVATE POLICY</div>
				</WrapperNavItem>
				<WrapperNavItem>
					<div>[03]</div>
					<div>SHIPPING</div>
				</WrapperNavItem>
				<WrapperNavItem>
					<div>[04]</div>
					<div>RETURN</div>
				</WrapperNavItem>
			</WrapperNav>
			<WrapperGroup>
				<WrapperTitle>
					<h2>TERMS OF CONDITIONS </h2>
				</WrapperTitle>
				<WrapperDirectors>
					[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
				</WrapperDirectors>
				<WrapperText>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.{' '}
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.Prior to the host uprising of Season 2,
						guests were allowed to use a host in any way they choose — including
						committing violent actions hat resulted in a host's injury or death.
						Delos marketing states that guests are guaranteed privacy in their
						interactions with hosts, although Season 2 Episode 1 revealed that
						at least some hosts are programmed to record the full extent of a
						guest's experiences with them, including the guest's DNA (likely
						obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death. END
					</p>
				</WrapperText>
			</WrapperGroup>
			<WrapperGroup>
				<WrapperTitle>
					<h2>PRIVATE POLICY</h2>
				</WrapperTitle>
				<WrapperDirectors>
					[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
				</WrapperDirectors>
				<WrapperText>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.
					</p>
				</WrapperText>
			</WrapperGroup>
			<WrapperGroup>
				<WrapperTitle>
					<h2>SHIPPING</h2>
				</WrapperTitle>
				<WrapperDirectors>
					[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
				</WrapperDirectors>
				<WrapperText>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
				</WrapperText>
			</WrapperGroup>
			<WrapperGroup>
				<WrapperTitle>
					<h2>RETURN</h2>
				</WrapperTitle>
				<WrapperDirectors>
					[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
				</WrapperDirectors>
				<WrapperText>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death.
					</p>
					<p>
						Prior to the host uprising of Season 2, guests were allowed to use a
						host in any way they choose — including committing violent actions
						hat resulted in a host's injury or death. Delos marketing states
						that guests are guaranteed privacy in their interactions with hosts,
						although Season 2 Episode 1 revealed that at least some hosts are
						programmed to record the full extent of a guest's experiences with
						them, including the guest's DNA (likely obtained through the
						exchange of bodily fluids during sexual activity).Prior to the host
						uprising of Season 2, guests were allowed to use a host in any way
						they choose — including committing violent actions hat resulted in a
						host's injury or death. or death.Prior to the host uprising of
						Season 2, guests were allowed to use a host in any way they choose —
						including committing violent actions hat resulted in a host's injury
						or death. Delos marketing states that guests are guaranteed privacy
						in their interactions with hosts, although Season 2 Episode 1
						revealed that at least some hosts are programmed to record the full
						extent of a guest's experiences with them, including the guest's DNA
						(likely obtained through the exchange of bodily fluids during sexual
						activity).Prior to the host uprising of Season 2, guests were
						allowed to use a host in any way they choose — including committing
						violent actions hat resulted in a host's injury or death.
					</p>
				</WrapperText>
			</WrapperGroup>
		</Wrapper>
	);
};
