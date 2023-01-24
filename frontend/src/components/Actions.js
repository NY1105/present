import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'



const Actions = () => {
	const { logout } = useLogout()
    const handleLogout = () => {
        logout()
    }
	const { user } = useAuthContext()

    return (
        <div class="action">
            <h3>{user.email}</h3>

            

            <button class="logout" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Actions