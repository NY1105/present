import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePanelContext } from '../hooks/usePanelContext'

const Actions = () => {
	const { dispatch: panelDispatch } = usePanelContext()
	const { logout } = useLogout()
	const { user } = useAuthContext()
	const handleLogout = () => {
		logout()
	}

	const handleGoto = () => {
		panelDispatch({ type: 'FORM_PANEL' })
	}

	return (
		<div className="action">
			<h3>{user && user.username}</h3> 
			<div>
				<button onClick={handleGoto} className="link">Add a new Tool</button>
			</div>
			<button className="logout" onClick={handleLogout}>
				Logout
			</button>
		</div>
	)
}

export default Actions
