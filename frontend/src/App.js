import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/system'
import { themeOptions } from './styles/theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Me from './pages/Me'

const theme = createTheme(themeOptions)

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				{/* <ThemeProvider theme={theme}> */}
					<Layout>
						<div className="pages">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/me" element={<Me />} />
								<Route
									path="*"
									element={
										<>
											<h1>Page Not Found</h1>
											<Link to="/">Back to home</Link>
										</>
									}
								/>
							</Routes>
						</div>
					</Layout>
				{/* </ThemeProvider> */}
			</BrowserRouter>
		</div>
	)
}

export default App
