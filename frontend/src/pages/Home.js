import { useEffect, useState } from 'react'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import ToolTableProvider from '../components/ToolTable'
import Panel from '../components/Panel'


const Home = () => {
	const [isLoading, setIsLoading] = useState(true)
	const { tools, dispatch } = useToolsContext()
	const { user } = useAuthContext()

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
	}, [dispatch, user])

	return (
		<div className="home">
			<ToolTableProvider data={tools} isLoading={isLoading}/>
			<Panel />
		</div>
	)
}

export default Home
