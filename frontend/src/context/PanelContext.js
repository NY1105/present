import { createContext, useReducer } from 'react'
import Login from "../components/Login"
import SignUp from "../components/Signup"
import Actions from '../components/Actions'
import ToolForm from '../components/ToolForm'

export const PanelContext = createContext()

export const PanelReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_PANEL":
			return {
				panel: {Login}
			}
		case "SIGNUP_PANEL" :
			return {
				panel: {SignUp}
			}
		default:
			return state
	}
}

export const PanelContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(PanelReducer, {
		panel: null,
	})



	return (
		<PanelContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PanelContext.Provider>
	)
}
