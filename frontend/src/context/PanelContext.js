import { createContext, useReducer } from 'react'

export const PanelContext = createContext()

export const PanelReducer = (state, action) => {
	switch (action.type) {
		case 'TABLE_PANEL':
			return {
				page: 'Table'
			}
		case 'LOGIN_PANEL':
			return {
				page: 'Login',
			}
		case 'SIGNUP_PANEL':
			return {
				page: 'Signup',
			}
		case 'ACTIONS_PANEL':
			return {
				page: 'Actions',
			}
		case 'FORM_PANEL':
			return {
				page: 'ToolForm'
			}
		default:
			return state
	}
}

export const PanelContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(PanelReducer, {
		page: 'Table',
	})

	return (
		<PanelContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PanelContext.Provider>
	)
}
