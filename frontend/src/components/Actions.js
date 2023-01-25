import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
// import { usePanelContext } from '../hooks/usePanelContext'

const Actions = () => {
	// const { page, dispatch } = usePanelContext()
	const { logout } = useLogout()
	const handleLogout = () => {
		logout()
		// dispatch({ type: 'LOGIN_PANEL' })
	}
	const { user } = useAuthContext()

	return (
		<div className="action">
			<h3>{user && user.email}</h3>

			<button className="logout" onClick={handleLogout}>
				Logout
			</button>
		</div>
	)
}

export default Actions
