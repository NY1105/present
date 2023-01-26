import { Link } from 'react-router-dom'

const Navbar = () => {

	
	
	return (
		<header>
			<div className="container">
				<Link to="/">
					{/* TODO: Add app icon */}
					<h1>Text Management Site</h1>
				</Link>
				<nav>
					<div>
						<Link to="/">Home</Link>
						<Link to="/tags">Tags</Link>
						<Link to="/about">About</Link>
					</div>
				</nav>

				 
				
			</div>
		</header>
	)
}

export default Navbar
