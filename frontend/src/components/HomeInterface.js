import UserOptions from './OptionsUser'
import Panel from './Panel'

const HomeInterface = ({ user }) => {
	return (
		<div>
			<UserOptions user={user} />
			<Panel />
		</div>
	)
}

export default HomeInterface
