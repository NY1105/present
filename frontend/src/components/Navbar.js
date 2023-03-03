import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth)
			})
		}
	})
	return (
		<header>
			<div className="navbar">
				<Link to="/">
					{width >= 1050 ? (
						<h2>Project Showcase: Tools Management Site</h2>
					) : (
						<></>
					)}
				</Link>
				<nav>
					<div className="div-navbuttons">
						<Link to="/">Home</Link>
						{/* <Link to="/tags">Tags</Link> */}
						<Link to="/about">About</Link>
						<Link to="/me">Me</Link>
						<ExternalLink href="https://github.com/NY1105/present">
							<span>Github</span>
						</ExternalLink>
						<ExternalLink href="https://www.linkedin.com/in/nicholasyanwaiyin/">
							<span>LinkedIn</span>
						</ExternalLink>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
