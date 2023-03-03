import UserOptions from './OptionsUser'
import Panel from './Panel'

const HomeInterface = ({ user, tools, isLoading }) => {
	return (
		<div>
			<UserOptions user={user}  />
			<Panel/>
		</div>
	)
}

export default HomeInterface
