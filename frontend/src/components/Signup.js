import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { usePanelContext } from '../hooks/usePanelContext'

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const { signup, isLoading, error } = useSignup()
	const { dispatch: panelDispatch } = usePanelContext()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await signup(email, password)
	}

	const handleGoto = () => {
		panelDispatch({ type: 'LOGIN_PANEL' })
	}

	return (
		<form className="signup" onSubmit={handleSubmit}>
			<h3>Sign Up</h3>
			<div align="right">
				<Link align="right" to="/" onClick={handleGoto}>
					Log In
				</Link>
			</div>
			<label>Email:</label>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<label>Username:</label>
			<input
				type="username"
				onChange={(e) => setUsername(e.target.value)}
				value={username}
			/>
			<label>Password:</label>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<button disabled={isLoading}>Sign Up</button>
			{error && <div className="error">{error}</div>}
		</form>
	)
}

export default Signup
