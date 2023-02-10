import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Tags from './pages/Tags'
import About from './pages/About'
import Me from './pages/Me'

const theme = createTheme(themeOptions)

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/tags" element={<Tags />} />
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
			</BrowserRouter>
		</div>
	)
}

export default App
