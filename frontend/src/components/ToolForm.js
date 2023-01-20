import { useState } from 'react'
import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ToolForm = () => {
	const { dispatch } = useToolsContext()
	const { user } = useAuthContext()
	
	const [appName, setAppName] = useState('')

	// const [attr, setAttr] = useState('')
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!user) {
			setError('You must be logged in')
			return
		}

		const tool = { appName }

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

	return (
		<form className="create" onSubmit={handleSubmit}>
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
