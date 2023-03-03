import Login from './Login'
import Signup from './Signup'
import Actions from './Actions'
import ToolForm from './ToolForm'
import ToolTableProvider from './ToolTable'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePanelContext } from '../hooks/usePanelContext'
import { useToolsContext } from '../hooks/useToolsContext'

export const Panel = () => {
	const { page, dispatch } = usePanelContext()
	const { user } = useAuthContext()

	useEffect(() => {
		dispatch({ type: 'TABLE_PANEL' })
	}, [dispatch, user])

	const [isLoading, setIsLoading] = useState(true)
	const { tools, toolsdispatch } = useToolsContext()
	const fetchData = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/tools`)
		const json = await response.json()

		if (response.ok) {
			dispatch({ type: 'SET_TOOLS', payload: json })
		}
	}

	useEffect(() => {
		setIsLoading(true)
		fetchData()
		setIsLoading(false)
	}, [toolsdispatch, user])

	switch (page) {
		case 'Table':
			return <ToolTableProvider data={tools} isLoading={isLoading} />
		case 'Signup':
			return <Signup />
		case 'Login':
			return <Login />
		case 'Actions':
			return <Actions />
		case 'ToolForm':
			return <ToolForm />
		default:
			return null
	}
}
export default Panel
