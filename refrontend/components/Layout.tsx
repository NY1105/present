import Navbar from './Navbar'
type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>
const Layout = ({ children }: ComponentWithChildProps) => {
	return (
		<div className="">
			<Navbar />
			<div id="main-content" className="py-10 px-12 md:px-40">
				{children}
			</div>
		</div>
	)
}

export default Layout
