import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePanelContext } from '../hooks/usePanelContext'

const Actions = () => {
	const { page, dispatch: panelDispatch } = usePanelContext()
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
			<h3>{user && user.email}</h3>
			<div>
				<button onClick={handleGoto} class="link">Add a new Tool</button>
			</div>
			<button className="logout" onClick={handleLogout}>
				Logout
			</button>
		</div>
	)
}

export default Actions
