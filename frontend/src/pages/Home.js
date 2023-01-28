import { useEffect } from 'react'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import ToolTableProvider from '../components/ToolTable'
import Panel from '../components/Panel'


const Home = () => {
	
	const { tools, dispatch } = useToolsContext()
	const { user } = useAuthContext()
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/tools`)
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: 'SET_TOOLS', payload: json })
			}
		}
		fetchData()
	}, [dispatch, user])

	return (
		<div className="home">
			<ToolTableProvider data={tools} />
			<Panel />
		</div>
	)
}

export default Home
