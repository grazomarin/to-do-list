import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ArrowIcon({ folded, handleClick }) {
	const [theme, setTheme] = useTheme();

	return (
		<svg
			className={`arrow ${folded ? 'folded' : ''} ${
				theme === 'dark' ? 'dark' : ''
			}`}
			onClick={handleClick}
			viewBox="0 -4.5 20 20"
			version="1.1"
			fill="#000000"
		>
			<g strokeLinecap="round" strokeLinejoin="round" />

			<g>
				<g
					stroke="none"
					strokeWidth="10"
					fill="none"
					fillRule="evenodd"
				>
					<g
						transform="translate(-260.000000, -6684.000000)"
						fill="#000000"
					>
						<g transform="translate(56.000000, 160.000000)">
							<path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"></path>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default ArrowIcon;
