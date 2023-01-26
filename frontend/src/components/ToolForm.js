import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePanelContext } from '../hooks/usePanelContext'

const ToolForm = () => {
	const { dispatch } = useToolsContext()
	const { user } = useAuthContext()
	const { dispatch: panelDispatch } = usePanelContext()
	
	// const [attr, setAttr] = useState('')
	// TODO: Add all required attributes
	const [appName, setAppName] = useState('')
	const [createdBy] = useState(user.username)

	
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])


	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!user) {
			setError('You must be logged in')
			return
		}
		

		const tool = { appName, createdBy }

		const response = await fetch('/api/tools/', {
			method: 'POST',
			body: JSON.stringify(tool),
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		})
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
			setEmptyFields(json.emptyFields)
		}
		if (response.ok){
			setAppName('')
			setError(null)
			setEmptyFields([])

			console.log('new Tool added', json)
			dispatch({ type: 'CREATE_TOOL', payload: json })

		}
	}

	const handleGoBack = () => {
		panelDispatch({ type: 'ACTIONS_PANEL' })
	}

	return (
		<form className="create" onSubmit={handleSubmit}>
			<div align="right">
				<Link align="right" to="/" onClick={handleGoBack}>
					Back
				</Link>
			</div>

			<h3>Add a new Tool</h3>

			<label>AppName: </label>
			<input
				type="text"
				onChange={(e) => setAppName(e.target.value)}
				value={appName}
				className={emptyFields.includes('appName') ? 'error' : ''}
			/>

            <button>Add Tool</button>
            {error && <div className='error'>{error}</div>}
		</form>
	)
}

export default ToolForm
