import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import Layout from './components/Layout'
import Home from './pages/Home'
// import Navbar from './components/Navbar'
import Tags from './pages/Tags'
import About from './pages/About'
import Me from './pages/Me'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					{/* <Navbar /> */}
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
				</Layout>
			</BrowserRouter>
		</div>
	)
}

export default App
