import { createContext, useReducer } from 'react'

export const PanelContext = createContext()

export const PanelReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_PANEL":
			return {
				page: 'Login'
			}
		case "SIGNUP_PANEL" :
			return {
				page: 'Signup'
			}
		case "ACTIONS_PANEL" :
			return {
				page: 'Actions'
			}
		default:
			return state
	}
}

export const PanelContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(PanelReducer, {
		page: 'Login',
	})



	return (
		<PanelContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PanelContext.Provider>
	)
}
