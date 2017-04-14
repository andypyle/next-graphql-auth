import { createElement } from 'react';
import Link from 'next/link';

const NavigationItem = ({ url = '#', text = 'Nav Item', prefetch = false, divider = false, onClick = null }) => {
	return (
		<li className={`Navigation__Item${divider ? ' divider' : ''}`}>
			<style jsx>
			{`
				.Navigation__Item {
					display: flex;
				}

				.divider {
					padding: .75rem 0;
					margin: 0 .75rem;
					width: 0;
					overflow: hidden;
					border: 1px solid rgba(255,255,255,0.33);
				}

				a,
				button {
					display: flex;
					font-family: 'Nunito', sans-serif;
					font-size: 1.33rem;
					font-weight: 300;
					padding: .75rem 1rem;
				}

				a:hover,
				button:hover {
					background-color: rgba(255,255,255,0.2);
				}
			`}
			</style>
			{ divider ? ' ' :
				onClick ? <button onClick={ onClick }>{ text }</button> :
					<Link href={ url } prefetch={prefetch}>
						<a>{ text }</a>
					</Link>
			}
		</li>
	);
};

const Navigation = ({ loggedIn }) => {
	return (
		<ul className="Navigation">
			<style jsx>
			{`
				.Navigation {
					display: flex;
					align-items: center;
				}
			`}
			</style>
			<NavigationItem text="Home" />
			<NavigationItem text="About" />
			<NavigationItem divider />
			<NavigationItem text={ loggedIn ? 'Logout' : 'Login'} onClick={() => console.log('Log In clicked')}/>
		</ul>
	);
};

export default Navigation;