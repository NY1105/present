import { createContext, useReducer } from 'react'

export const ToolsContext = createContext()

export const toolsReducer = (state, action) => {
	switch (action.type) {
		case 'TOOLS_LOADING': {
			return {
				...state,
				isToolLoading: true
			}
		}

		case 'SET_TOOLS':
			return {
				...state,
				tools: action.payload,
				isToolLoading: false
			}
		case 'CREATE_TOOL':
			return {
				...state,
				tools: [...state.tools, action.payload],
			}
		case 'DELETE_TOOL':
			return {
				...state,
				tools: state.tools.filter((w) => w._id !== action.payload._id),
			}
		default:
			return state
	}
}

export const ToolsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(toolsReducer, {
		isToolLoading: true,
		tools: [],
	})

	return (
		<ToolsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ToolsContext.Provider>
	)
}
