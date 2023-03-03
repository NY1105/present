import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePanelContext } from '../hooks/usePanelContext'
import { Link } from 'react-router-dom'

const Actions = () => {
	const { dispatch: panelDispatch } = usePanelContext()
	const { logout } = useLogout()
	const { user } = useAuthContext()
	const handleLogout = () => {
		logout()
	}

	const handleGotoForm = () => {
		panelDispatch({ type: 'FORM_PANEL' })
	}
	const handleGotoTable = () => {
		panelDispatch({ type: 'TABLE_PANEL' })
	}

	return (
		<div className="div-actions">
			<div className="action">
				<h3>{user && user.username}</h3>
				<div align="right">
					<Link align="right" to="/" onClick={handleGotoTable}>
						Back
					</Link>
				</div>
				<div>
					<button onClick={handleGotoForm} className="link">
						Add a new Tool
					</button>
				</div>
				<button className="logout" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	)
}

export default Actions
