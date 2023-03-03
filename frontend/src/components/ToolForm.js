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
	const [createdBy] = useState(user.username)
	const [appName, setAppName] = useState('')
	const [appProviderName, setAppProviderName] = useState('')
	const [appOfficialSiteURL, setAppOfficialSiteURL] = useState('')
	const [appDescription, setAppDescription] = useState('')
	const [appLogo, setAppLogo] = useState('')
	const [nSaved, setNSaved] = useState('')

	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!user) {
			setError('You must be logged in')
			return
		}

		const tool = {
			appName,
			createdBy,
			appProviderName,
			appOfficialSiteURL,
			appDescription,
			appLogo,
			nSaved,
		}

		const response = await fetch(
			`${process.env.REACT_APP_API_ENDPOINT}/tools/`,
			{
				method: 'POST',
				body: JSON.stringify(tool),
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		)
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
			setEmptyFields(json.emptyFields)
		}
		if (response.ok) {
			setAppName('')
			setAppProviderName('')
			setAppOfficialSiteURL('')
			setAppDescription('')
			setAppLogo('')
			setNSaved(null)

			setError(null)
			setEmptyFields([])

			console.log('new Tool added', json)
			dispatch({ type: 'CREATE_TOOL', payload: json })
			panelDispatch({ type: 'TABLE_PANEL' })
		}
	}

	const handleGoBack = () => {
		panelDispatch({ type: 'ACTIONS_PANEL' })
	}

	return (
		<div className='div-loginsignupcreate'>
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

				<label>Provider: </label>
				<input
					type="text"
					onChange={(e) => setAppProviderName(e.target.value)}
					value={appProviderName}
				/>

				<label>appOfficialSiteURL: </label>
				<input
					type="text"
					onChange={(e) => setAppOfficialSiteURL(e.target.value)}
					value={appOfficialSiteURL}
				/>

				<label>appDescription: </label>
				<input
					type="text"
					onChange={(e) => setAppDescription(e.target.value)}
					value={appDescription}
				/>

				<label>appLogo: </label>
				<input
					type="text"
					onChange={(e) => setAppLogo(e.target.value)}
					value={appLogo}
				/>

				<button>Add Tool</button>
				{error && <div className="error">{error}</div>}
			</form>
		</div>
	)
}

export default ToolForm
