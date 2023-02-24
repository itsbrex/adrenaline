import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import Button from "../components/Button";

import "../styles/Header.css";

function Header({ onClick, isTransparent }) {
	const {
		isAuthenticated,
		loginWithRedirect,
		logout,
	} = useAuth0();

	return (
		<div className={isTransparent ? "header transparent" : "header"}>
			<div className="logo">
				<Link to="/">
					<img src="./logo.png" />
				</Link>
			</div>
			<div className="buttons">
				<div className="linkButtons">
					<a className="discordIcon" href="https://discord.com/" target="_blank">
						<img src="./discord_icon.png" />
					</a>
					<a className="githubIcon" href="https://github.com/shobrook/adrenaline/" target="_blank">
						<img src="./github_icon.png" />
					</a>
				</div>
				<div className="ctaButtons">
					{isAuthenticated ? (
						<Button isPrimary onClick={logout}>Logout</Button>
					) : (
						<>
							<Button id="signUpButton" isPrimary onClick={loginWithRedirect}>Sign up</Button>
							<Button isPrimary={false} onClick={loginWithRedirect}>Log in</Button>
						</>
					)}
				</div>
			</div>
			<div className="compactButtons">
				{isAuthenticated ? (
					<Button isPrimary onClick={logout}>Logout</Button>
				) : (
					<>
						<Button id="signUpButton" isPrimary onClick={loginWithRedirect}>Sign up</Button>
						<Button isPrimary={false} onClick={loginWithRedirect}>Log in</Button>
					</>
				)}
			</div>
		</div>

	);
}

export default Header;


