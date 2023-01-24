import Login from './Login'
import Actions from './Actions'
import ToolForm from './ToolForm'
import { useAuthContext } from '../hooks/useAuthContext'

// import Signup from './Signup'
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'
const Panel = () => {
	const { user } = useAuthContext()

    return (
        <div>
            {!user ? <Login />: <Actions/>}
        </div>
    )
}
export default Panel