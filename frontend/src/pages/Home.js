import { useEffect, useState } from 'react'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import ToolTableProvider from '../components/ToolTable'
import HomeInterface from '../components/HomeInterface'
import Panel from '../components/Panel'

const Home = () => {
	const { user } = useAuthContext()

	const [isLoading, setIsLoading] = useState(true)
	const { tools, dispatch } = useToolsContext()
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
			<HomeInterface user={user} tools={tools} isLoading={isLoading}/>
		</div>
	)
}

export default Home
