import Footer from './Footer'
import Navbar from './Navbar'
type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>
const Layout = ({ children }: ComponentWithChildProps) => {
	return (
		<>
			<div id="layout" className="flex flex-col overflow-y-auto min-h-screen min-w-screen ">
				<Navbar />
				<div
					id="main-content"
					className="flex-1 px-6 sm:px-12 md:px-16 lg:px-20"
				>
					{children}
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Layout
