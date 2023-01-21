import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
	const { logout } = useLogout()
	const { user } = useAuthContext()
	const handleClick = () => {
		logout()
	}
	
	return (
		<header>
			<div className="container">
				<Link to="/">
					{/* TODO: Add app icon */}
					<h1>Text Management Site</h1>
				</Link>
				<nav>
					{user && (
						<div>
							{/* TODO: Display Username instead of email */}
							{/* Link to user page */}
							<span>{user.email}</span> 
							<button onClick={handleClick}>Log out</button>
						</div>
					)}
					{!user && (
						<div>
							<Link to="/login">Login</Link>
							<Link to="/signup">Sign Up</Link>
						</div>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
