import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ToolsContextProvider } from './context/ToolsContext'
import { AuthContextProvider } from './context/AuthContext'
import { PanelContextProvider } from './context/PanelContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<PanelContextProvider>
				<ToolsContextProvider>
					<App />
				</ToolsContextProvider>
			</PanelContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
)
