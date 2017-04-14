import Link from 'next/link';
import Navigation from './Navigation.js';
import { colors } from '../util';

const Header = ({ loggedIn = true, appName = 'NextJS' }) => {
	return (
		<header>
			<style jsx>
			{`
				header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: ${colors.asphalt};
					color: ${colors.white};
				}

				h1 {
					font-size: 2rem;
					padding: 0 1rem;
					font-weight: 900;
				}
			`}
			</style>
			<h1>{ appName }</h1>
			<Navigation />
		</header>
	);
};

export default Header;