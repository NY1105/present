import Navbar from './Navbar'
type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>
const Layout = ({ children }: ComponentWithChildProps) => {
	return (
		<div className="pt-2 px-10 md:px-40">
			<Navbar />
			<div id="main-content" className="py-10 px-20">
				{children}
			</div>
		</div>
	)
}

export default Layout
