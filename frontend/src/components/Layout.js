import React, { Link } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Button, ButtonGroup, Typography } from '@mui/material'
import { Navigate } from 'react-router'

const Layout = ({ children }) => {
	const handleRedirect = () => {
		// Navigate('/')
		console.log('link')
	}
	return (
		<div>
			<AppBar color="primary" className="app-bar" elevation={1}>
				<Toolbar>
					<Typography variant="h5" component="p" className="title">
						Project Showcase: Tools Management Site
					</Typography>
					<ButtonGroup className="links" variant="contained">
						<Button onClick={handleRedirect}>Link_1</Button>
						<Button onClick={handleRedirect}>Link_1</Button>
						<Button onClick={handleRedirect}>Link_1</Button>
					</ButtonGroup>
				</Toolbar>
			</AppBar>
			<div className="page">{children}</div>
		</div>
	)
}

export default Layout
