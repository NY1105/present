import { ToolsContext } from '../context/ToolsContext'
import { useContext } from 'react'

export const useToolsContext = () => {
	const context = useContext(ToolsContext)

	if (!context) {
		throw Error(
			'useToolsContext must be used inside an ToolsContextProvider'
		)
	}

	return context
}
