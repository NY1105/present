import React from 'react'
import { Button, Typography, svg } from '@mui/material'
import { usePanelContext } from '../hooks/usePanelContext'

const OptionsUser = ({ user }) => {
	const { page, dispatch } = usePanelContext()
	if (!user) {
		return (
			<div className="div-user-buttons">
				<Button
					variant="outlined"
					color="inherit"
					onClick={() => {
						dispatch({ type: 'LOGIN_PANEL' })
					}}
				>
					Login
				</Button>
				<Button
					variant="outlined"
					color="inherit"
					onClick={() => {
						dispatch({ type: 'SIGNUP_PANEL' })
					}}
				>
					Sign up
				</Button>
			</div>
		)
	}
	return (
		<div className="div-user-display">
			{/* <div className="user-display"></div> */}
			<Button
				variant="contained"
				color="inherit"
				onClick={() => {
					dispatch({ type: 'ACTIONS_PANEL' })
				}}
			>
				{user.username}
			</Button>
		</div>
	)
}

export default OptionsUser
