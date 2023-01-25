import { useAuthContext } from './useAuthContext'
import { useToolsContext } from './useToolsContext'
import { usePanelContext } from './usePanelContext'

export const useLogout = () => {
	const { dispatch } = useAuthContext()
	const { dispatch: toolDispatch } = useToolsContext()
	const { dispatch: panelDispatch } = usePanelContext()
	const logout = () => {
		localStorage.removeItem('user')
		dispatch({ type: 'LOGOUT' })
		toolDispatch({ type: 'SET_TOOLS', payload: null })
		panelDispatch({ type: 'LOGIN_PANEL' })

	}
	return { logout }
}
