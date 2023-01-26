import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { usePanelContext } from '../hooks/usePanelContext'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, isLoading, error } = useLogin()
	const { dispatch: panelDispatch } = usePanelContext()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(email, password)
	}

	const handleGoto = () => {
		panelDispatch({ type: 'SIGNUP_PANEL' })
	}

	return (
		<form className="login" onSubmit={handleSubmit}>
			<h3>Log In</h3>

			<div align="right">
				<Link align="right" to="/" onClick={handleGoto}>
					Sign Up
				</Link>
			</div>

			<label>Email:</label>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<label>Password:</label>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>

			<button className="buttons" disabled={isLoading}>
				Log In
			</button>
			<button onClick={()=> {setEmail("guest@example.com");setPassword("Guest0!!")}} disabled={isLoading}>Log In as Guest</button>

			{error && <div className="error">{error}</div>}
		</form>
	)
}

export default Login
