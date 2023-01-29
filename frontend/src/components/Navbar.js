import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'

const Navbar = () => {
	return (
		<header>
			<div className="container">
				<Link to="/">
					{/* TODO: Add app icon */}
					<h1>Project Showcase: Tools Management Site</h1>
				</Link>
				<nav>
					<div>
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
