import styled from "styled-components";

export const Container = styled.aside`
	width: 320px;
	height: calc(100% - 40px);
	background: #fff;
	border-radius: 5px;
	padding: 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	position: fixed;
	z-index: 99;
	left: 20px;
	top: 20px;
	overflow: scroll;

	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background: #fff;
	}
	&::-webkit-scrollbar-thumb {
		background: #ececec;
		&:hover {
			background: #dedede;
		}
	}
`;

export const BreweryInfo = styled.div`
	display: flex;
	align-items: center;

	& + div {
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #eee;
	}

	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left: 5px;

		button {
			border: none;
			background: #ffffff;
			text-align: left;
			margin-bottom: 5px;
			&:hover {
				text-decoration: underline;
				cursor: pointer;
			}

			strong {
				font-size: 17px;
				overflow: hidden;

			}
		}

		span {
			font-size: 14px;
			color: #a0a0a0;
		}
	}
`;
