import { createContext, useReducer } from 'react'
import Login from "../components/Login"

export const UserPanelContext = createContext()

export const userPanelReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_USER":
			return {
				panel: {Login}
			}
		default:
			return state
	}
}

export const UserPanelContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userPanelReducer, {
		panel: null,
	})



	return (
		<UserPanelContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserPanelContext.Provider>
	)
}
