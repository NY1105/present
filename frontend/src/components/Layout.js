import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import { Button, ButtonGroup, Typography } from '@mui/material'
import style from '../styles/Layout.module.css'

const Layout = ({ children }) => {
	return (
		<div>
			<AppBar position="static" color="primary" elevation={1}>
				<Toolbar>
					<Typography variant="h5" component="p" className={style.title}>
						Project Showcase: Tools Management Site
					</Typography>
					<ButtonGroup variant="text" color="inherit">
						<Button href="/">Home</Button>
						<Button href="/about">About</Button>
						<Button href="/me">Me</Button>
						<Button href="https://github.com/NY1105/present">GitHub</Button>
						<Button href="https://www.linkedin.com/in/nicholasyanwaiyin">
							LinkedIn
						</Button>
					</ButtonGroup>
				</Toolbar>
			</AppBar>
			<div className="page">{children}</div>
		</div>
	)
}

export default Layout
