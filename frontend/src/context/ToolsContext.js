import { createContext, useReducer } from 'react'

export const ToolsContext = createContext()

export const toolsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TOOLS':
			return {
				tools: action.payload,
			}
		case 'CREATE_TOOL':
			return {
				tools: [...state.tools, action.payload],
			}
		case 'DELETE_TOOL':
			return {
				tools: state.tools.filter((w) => w._id !== action.payload._id),
			}
		default:
			return state
	}
}

export const ToolsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(toolsReducer, {
		tools: null,
	})

	return (
		<ToolsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ToolsContext.Provider>
	)
}
