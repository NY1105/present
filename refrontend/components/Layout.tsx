import Footer from './Footer'
import Navbar from './Navbar'
type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>
const Layout = ({ children }: ComponentWithChildProps) => {
	return (
		<>
			<Navbar />
			<div
				id="layout"
				className=" overflow-y-auto px-6 sm:px-12 md:px-16 lg:px-20 "
			>
				<div id="main-content" className="h-full w-full mt-20">
					{children}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Layout
