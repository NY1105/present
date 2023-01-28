import { useToolsContext } from '../hooks/useToolsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ToolPreview = ({ tool }) => {
	const { dispatch } = useToolsContext()
	const { user } = useAuthContext()
	const handleClick = async () => {
		if (!user) {
			return
		}
		const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/tools/` + tool._id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
		const json = await response.json()
		if (response.ok) {
			dispatch({ type: 'DELETE_TOOL', payload: json })
		}
	}
	return (
		<div className="tool-preview">
			{/* TODO: Display necessary info */}
			<h3>{tool.appName}</h3>
			<p>{tool.appProviderName}</p>
			<p>
				<strong>Number of Saved: </strong>
				{tool.nSaved}
			</p>
			<p>
				<strong>Created By: </strong>
				{tool.createdBy}
			</p>
			{/* TODO: Add button for detailed info */}
            <span className="material-symbols-outlined" onClick={handleClick}>
				delete
			</span>
		</div>
	)
}
export default ToolPreview
