import { motion } from "framer-motion";
import styled from "styled-components";

const Btn = styled(motion.button)`
	all: unset;
	cursor: pointer;
	width: 100px;
	height: 40px;
	font-size: 19px;
	font-weight: 600;
	background-color: ${(props) => props.theme.white.lighter};
	color: ${(props) => props.theme.black.darker};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	svg {
		margin-right: 10px;
	}
	&:hover {
		background-color: ${(props) => props.theme.white.darker};
	}
`;

export const PlayBtn = () => {
	return (
		<Btn>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="Hawkins-Icon Hawkins-Icon-Standard"
			>
				<path
					d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
					fill="currentColor"
				></path>
			</svg>
			<span>Play</span>
		</Btn>
	);
};
