import { useEffect, useState } from 'react'

import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'

import ToolDetails from '../components/ToolDetails'
import ToolForm from '../components/ToolForm'

const Home = () => {
	const { tools, dispatch } = useToolsContext()
	const { user } = useAuthContext()
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/api/tools')
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: 'SET_TOOLS', payload: json })
			}
		}
		fetchData()
	}, [dispatch, user])

	return (
		<div className="home">
			<div className="tools">
				{tools &&
					tools.map((tool) => <ToolDetails key={tool._id} tool={tool} />)}
			</div>
			<ToolForm />
		</div>
	)
}

export default Home
