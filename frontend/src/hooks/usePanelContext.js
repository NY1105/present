import { PanelContext } from '../context/PanelContext'
import { useContext } from 'react'

export const usePanelContext = () => {
	const context = useContext(PanelContext)

	if (!context) {
		throw Error(
			'PanelContext must be used inside an PanelContextProvider'
		)
	}

	return context
}
