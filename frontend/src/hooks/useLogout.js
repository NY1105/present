import { useAuthContext } from './useAuthContext'
import { useToolsContext } from './useToolsContext'

export const useLogout = () => {
	const { dispatch } = useAuthContext()
	const { dispatch: toolDispatch } = useToolsContext()
	const logout = () => {
		localStorage.removeItem('user')
		dispatch({ type: 'LOGOUT' })
		toolDispatch({ type: 'SET_TOOLS', payload: null })
	}
	return { logout }
}
