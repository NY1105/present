import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Tags from './pages/Tags'

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/tags" element={<Tags />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
